import React from 'react';
import PropTypes from 'prop-types';

function ProductSummary({onClick, name, sku}){
    const fullProductName = `${name} (${sku})`,
        addClick = (event) => {
            event.preventDefault();
            onClick()
        };

    return (
        <div className="product-list-item">
            <div className="row">
                <div className="col-md-9">
                    <label className='col-md-4'>Product Name</label>
                    <span className='form-control-static'>{fullProductName}</span>
                </div>
                <div className="col-md-3" style={{paddingTop: '5px'}}>
                    <button type="button" className="btn btn-block btn-default" onClick={addClick}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

ProductSummary.PropTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired
}

export default ProductSummary;