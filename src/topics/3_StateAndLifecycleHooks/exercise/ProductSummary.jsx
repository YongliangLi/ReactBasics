import React from 'react';
import PropTypes from 'prop-types';

function ProductSummary(props){
    const fullProductName = `${props.product.name} (${props.product.sku})`;

    return (
        <div className="product-list-item">
            <div className="row">
                <div className="col-md-12">
                    <label className='col-md-3'>Product Name:</label>
                    <span className='form-control-static'>{fullProductName}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <label className='col-md-3'>Description:</label>
                    <span className='form-control-static'>{props.product.description}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <label className='col-md-3'>Price:</label>
                    <span className='form-control-static'>${props.product.price}</span>
                </div>
            </div>
        </div>
    );
}

ProductSummary.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        sku: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number
    })
};

export default ProductSummary;