import React from 'react';
import { useSelector } from 'react-redux';

import Slider from '../../components/Slider';
import ListItem from '../../components/ListItem';
import Subtotal from '../../components/Subtotal';

import './Cart.scss';

const Cart = ({ showCart, handleShow }) => {

    const { cart: cartProducts } = useSelector(state => state.cart);

    return (
        <Slider
            show={showCart}
            title={`Sacola(${cartProducts.length})`}
            handleShow={handleShow}
        >
            {cartProducts?.length > 0
                ? cartProducts.map((cartProduct, index) => {
                    const { size } = cartProduct.sizes.find(size => size.sku === cartProduct.selectedSize);

                    return (
                        <ListItem
                            key={index}
                            size={size}
                            image={cartProduct.image}
                            name={cartProduct.name}
                            sale={cartProduct.on_sale}
                            oldPrice={cartProduct.regular_price}
                            price={cartProduct.actual_price}
                            installments={cartProduct.installments}
                            index={index}
                            quantity={cartProduct.quantity}
                        />
                    )
                })
                : <p className="cart__empty">Sua sacola está vazia :\</p>
            }
            <Subtotal />
        </Slider>
    )

};

export default Cart;