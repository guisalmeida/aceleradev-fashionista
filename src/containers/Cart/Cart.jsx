import React from 'react';
import { useSelector } from 'react-redux';

import Slider from '../../components/Slider';
import ListItem from '../../components/ListItem';

import './Cart.scss';

const Cart = ({ show }) => {

    const { cart: cartProducts } = useSelector(state => state.cart);

    return (
        <Slider
            show={show}
            title={`Sacola(${cartProducts.length})`}
        >
            {cartProducts?.length > 0
                ? cartProducts.map(cartProduct => {
                    const { size } = cartProduct.sizes.find(size => size.sku === cartProduct.selectedSize);
                    
                    return (
                        <ListItem
                            key={cartProduct.selectedSize}
                            size={size}
                            image={cartProduct.image}
                            name={cartProduct.name}
                            sale={cartProduct.on_sale}
                            oldPrice={cartProduct.regular_price}
                            price={cartProduct.actual_price}
                            installments={cartProduct.installments}
                        />
                    )
                })
                : <p className="cart__empty">Sua sacola está vazia :\</p>
            }
        </Slider>
    )

};

export default Cart;