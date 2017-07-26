import React from 'react';
import ProductSummary from './ProductSummary.jsx';
import {ProductData} from '../../MockData';

function Products() {
    const products = ProductData;

    return (
        <div>
            {
                products.map(product => {
                    return (
                        <ProductSummary key={product.id} id={product.id} product={product} />
                    )
                })
            }
        </div>
    );
}

export default Products;