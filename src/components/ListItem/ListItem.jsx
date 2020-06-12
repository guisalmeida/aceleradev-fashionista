import React from 'react';

import './ListItem.scss';

const ListItem = ({
    image,
    name,
    sale,
    installments,
    price,
    oldPrice,
    size
}) => {
    return (
        <div className="list__item">
            <figure className="list__image">
                <img src={image} alt={name} />
            </figure>
            <div className="list__info">
                <h3 className="list__title">{name}</h3>
                <p className="list__size"><span>{`Tam.: ${size}`}</span></p>
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