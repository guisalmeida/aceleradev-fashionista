import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectedProduct, addToCartAction, updateCartAction } from '../../actions/actions';

import './Product.scss';

const Product = () => {
    const dispatch = useDispatch();

    const [size, setSize] = useState(null);
    const [sizeError, setSizeError] = useState(false);

    const productId = window.location.pathname.split("/")[2];
    const product = useSelector(state => state.catalog.products.find(product => product.code_color === productId));
    const { cart: cartProducts } = useSelector(state => state.cart);
    
    const handleSize = (sku) => {
        Object.assign(product, {
            selectedSize: sku,
        });
        dispatch(selectedProduct(product));
        setSize(sku)
        setSizeError(false)
    };

    const addToCart = () => {
        if (size === null) return setSizeError(true)

        if (cartProducts.includes(product)) {
            product.quantity = product.quantity + 1;
            dispatch(updateCartAction(cartProducts));
        } else {
            Object.assign(product, {
                quantity: 1,
            });
            dispatch(addToCartAction(product))
        }
    };

    useEffect(() => { }, [size, sizeError]);

    return (
        <div className="product container">
            <figure className="product__image">
                <img src={product.image} alt={product.name} title={product.name} />
            </figure>

            <div className="product__content">
                <h3 className="product__name">{product.name}</h3>

                <div className="product__pricing">
                    {product.on_sale && (
                        <span className="product__price product__price--old">{product.regular_price}</span>
                    )}
                    <span className="product__price">{product.actual_price}</span>
                    <span className="product__price product__price--installments">em até {product.installments}</span>
                </div>

                <div className="product__sizes">
                    <p className="product__description">Escolha o tamanho</p>

                    {sizeError
                        && <p className="product__description product__description--warning">É necessário escolher um tamanho</p>
                    }

                    <div className="product__btn-group">
                        {product.sizes.map(size =>
                            size.available === true && (
                                <button
                                    key={size.sku}
                                    type="button"
                                    className={`product__filter ${product.selectedSize === size.sku ? 'product__filter--selected' : ''}`}
                                    onClick={() => handleSize(size.sku)}
                                >
                                    {size.size}
                                </button>
                            )
                        )}
                    </div>
                </div>

                <div className="product__actions">
                    <button
                        type="button"
                        className="product__add-to-cart"
                        onClick={() => addToCart()}
                    >
                        Adicionar à Sacola
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product;