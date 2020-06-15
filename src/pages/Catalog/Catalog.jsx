import React, { useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import Quantity from '../../components/Quantity/Quantity';

import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../actions/products';

import './Catalog.scss';

const Catalog = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.catalog);
    const url = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch(setProducts(data));
                localStorage.setItem("products", JSON.stringify(data))
            })
        // eslint-disable-next-line
    }, [])

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