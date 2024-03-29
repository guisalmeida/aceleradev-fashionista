import React from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <Link to={`/produto/${product.code_color}`}>
                <figure className="product-card__image">
                    {product.on_sale && <span className="product-card__discount">{`-${product.discount_percentage}`}</span>}
                    <img src={product.image || "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel"} alt={`Produto ${product.name}`} title={product.name} />
                </figure>
                <h3 className="product-card__name">{product.name}</h3>
                <div className="product-card__pricing">
                    {product.on_sale && <span className="product-card__price product-card__price--old">{product.regular_price}</span>}
                    <span className="product-card__price">{product.actual_price}</span>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard;