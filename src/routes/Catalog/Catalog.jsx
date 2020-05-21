import React from 'react';
import ProductCard from '../../components/ProductCard';

import './Catalog.scss';
import Quantity from '../../components/Quantity/Quantity';

const Catalog = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className="container">
            <Quantity />

            <div className="catalog">
                {cards &&
                    cards.map(
                        card => <ProductCard key={card} />
                    )
                }
            </div>
        </div>
    )
}

export default Catalog;