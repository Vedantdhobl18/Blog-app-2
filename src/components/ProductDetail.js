import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../products';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <h1 className="container-title">{product.title}</h1>
      <img src={product.image} alt={product.title} className="card-image" />
      <p className="container-content">{product.details}</p>
      <Link to="/" className="card-button">Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
