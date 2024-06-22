import React from 'react';
import ProductCard from './ProductCard';
import products from '../products';

const ProductList = () => {
  return (
    <div className="list-container">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
