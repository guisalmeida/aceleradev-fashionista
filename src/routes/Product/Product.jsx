import React from 'react'

import { useParams } from 'react-router-dom';

import './Product.scss';

const Product = () => {
    const { id } = useParams();

    return (
        <div className="product container">

            <figure className="product__image">
                <img src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912" alt="Produto " title="" />
            </figure>

            <div className="product__content">
                <h3 className="product__name">VESTIDO TRANSPASSE BOW</h3>

                <div className="product__pricing">
                    <span className="product__price product__price--old">R$ 199,90</span>
                    <span className="product__price">R$ 159,90</span>
                    <span className="product__price product__price--installments">em até 3x R$ 66,63</span>
                </div>

                <div className="product__sizes">
                    <p className="product__description">Escolha o tamanho</p>
                    <div className="product__btn-group">
                        <button type="button" className="product__filter">PP</button>
                        <button type="button" className="product__filter">P</button>
                        <button type="button" className="product__filter product__filter--selected">GG</button>
                    </div>
                </div>

                <div className="product__actions">
                    <button type="button" className="product__add-to-cart">Adicionar à Sacola</button>
                </div>
            </div>
        </div>
    )
}

export default Product;