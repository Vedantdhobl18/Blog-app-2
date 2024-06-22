import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <h2 className="card-title">{product.title}</h2>
      <p className="card-description">{product.description}</p>
      <Link to={`/products/${product.id}`} className="card-button">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
