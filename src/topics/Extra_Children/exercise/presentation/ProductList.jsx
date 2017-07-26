import React from 'react';
import PropTypes from 'prop-types';
import ProductSummary from './ProductSummary.jsx';

function ProductList({onAddClick, products}){
    return (
        <div>
            {
                products.map(product => (
                    <ProductSummary key={product.id} {...product} onClick={() => onAddClick(product.id)} />
                ))
            }
        </div>
    );
}

ProductList.PropTypes = {
    onAddClick: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            sku: PropTypes.string.isRequired
        })
    )
}

export default ProductList;