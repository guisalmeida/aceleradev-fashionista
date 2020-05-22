import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import Quantity from '../../components/Quantity/Quantity';

import './Catalog.scss';

const Catalog = () => {
    const urlApi = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(urlApi)
            .then(async res => {
                const response = await res.json();
                setProducts(response);
            })
    }, []);

    return (
        <div className="container">
            <Quantity
                length={products.length}
            />

            <div className="catalog">
                {products && products.map(product =>
                    <ProductCard
                        key={product.code_color}
                        product={product}
                    />
                )}
            </div>
        </div>
    )
}

export default Catalog;