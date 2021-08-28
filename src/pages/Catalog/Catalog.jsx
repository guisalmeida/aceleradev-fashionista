import React, { useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import Quantity from '../../components/Quantity/Quantity';

import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../redux/actions/productActions';

import './Catalog.scss';

const Catalog = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.catalog);
    const url = "https://raw.githubusercontent.com/GuiSAlmeida/aceleradev-fashionista/master/mockedData.json";

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch(setProducts(data));
                localStorage.setItem("products", JSON.stringify(data))
            })
    }, [dispatch])

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