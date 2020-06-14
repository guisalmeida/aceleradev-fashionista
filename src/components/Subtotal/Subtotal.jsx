import React from 'react';
import { useSelector } from 'react-redux';

import './Subtotal.scss';

const Subtotal = () => {

    const { cart: cartProducts } = useSelector(state => state.cart);

    const total = cartProducts.reduce((total, product) => {
        const price = product.actual_price
            .split(" ")[1]
            .replace(",", ".");

        const quantity = product.quantity;

        return total + (parseFloat(price) * quantity);
    }, 0);

    return (
        <div className="cart__subtotal">
            <div className="card__text">
                {`Subtotal - ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}`}
            </div>
        </div>
    )
}

export default Subtotal;