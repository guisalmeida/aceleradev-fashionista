import React from 'react';

import './ListItem.scss';

const ListItem = () => {
    return (
        <div className="search__item">
            <figure className="search__image">
                <img src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912" alt=""/>
            </figure>

            <h3 className="search__title">VESTIDO TRANSPASSE TRANSPASSE BOW</h3>

            <div className="search__prices">
                <p className="search__price search__price--old">R$ 199,99</p>
                <p className="search__price">R$ 159,99</p>
                <p className="search__price search__price--installments">3x de R$ 53,30</p>
            </div>
        </div>
    )
};

export default ListItem;