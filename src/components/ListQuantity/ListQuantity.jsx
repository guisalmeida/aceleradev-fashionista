import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartAction } from '../../actions/actions'

import './ListQuantity.scss';

const ListQuantity = ({ quantity, index }) => {
    const dispatch = useDispatch();
    const { cart: cartProducts } = useSelector(state => state.cart);

    const increment = (ind) => {
        cartProducts[ind].quantity = cartProducts[ind].quantity + 1;
        dispatch(updateCartAction(cartProducts));
    }

    const decrement = (ind) => {
        cartProducts[ind].quantity = cartProducts[ind].quantity - 1;
        dispatch(updateCartAction(cartProducts));
    }

    return (
        <div className="list__quantity">
            <button
                type="button"
                className="quantity__button"
                onClick={() => {
                    if (quantity <= 1) return;
                    decrement(index);
                }}
            >
                <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </button>

            <div className="quantity__input">{quantity}</div>

            <button
                type="button"
                className="quantity__button"
                onClick={() => increment(index)}
            >
                <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </button>
        </div>
    )
}

export default ListQuantity;