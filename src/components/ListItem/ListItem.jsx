import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateCartAction } from '../../redux/actions/cartActions'

import './ListItem.scss';
import ListQuantity from '../ListQuantity';

const ListItem = ({
    image,
    name,
    sale,
    installments,
    price,
    oldPrice,
    size,
    index,
    quantity
}) => {
    const dispatch = useDispatch();

    const { cart: cartProducts } = useSelector(state => state.cart);

    const handleDelete = ind => {
        cartProducts.splice(ind, 1);
        dispatch(updateCartAction(cartProducts));
    }

    return (
        <div className="list__item">
            <figure className="list__image">
                <img src={image || "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel"} alt={name} />
            </figure>
            <div className="list__info">
                <h3 className="list__title">{name}</h3>
                {size && <p className="list__size"><span>{`Tam.: ${size}`}</span></p>}

                {quantity &&
                    <ListQuantity
                        quantity={quantity}
                        index={index}
                    />
                }

                {quantity &&
                    <button
                        type="button"
                        className="list__remove"
                        onClick={() => handleDelete(index)}
                    >
                        Remover
                    </button>
                }
            </div>

            <div className="list__prices">
                {sale && <p className="list__price list__price--old">{oldPrice}</p>}
                <p className="list__price">{price}</p>
                <p className="list__price list__price--installments">{installments}</p>
            </div>
        </div>
    )
};

export default ListItem;