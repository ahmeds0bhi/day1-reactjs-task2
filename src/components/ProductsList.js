// ProductsList.js

import React from 'react';
import ProductCard from './ProductCard';
import data from '../data'; 

const ProductsList = () => {
    return (
        <div className="products-list">
            {data.products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;


