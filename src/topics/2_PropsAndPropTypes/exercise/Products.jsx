import React from 'react';
import { ProductData } from '../../MockData';

function ProductsComponent() {
    const productOne = ProductData[0],
        productTwo = ProductData[1];

    return (
        <div>
            <div className="product-list-item">
                <div className="row">
                    <div className="col-md-12">
                        <label className='col-md-3'>Product Name:</label>
                        <span className='form-control-static'>{productOne.name} ({productOne.sku})</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label className='col-md-3'>Description:</label>
                        <span className='form-control-static'>{productOne.description}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label className='col-md-3'>Price:</label>
                        <span className='form-control-static'>${productOne.price}</span>
                    </div>
                </div>
            </div>

            <div className="product-list-item">
                <div className="row">
                    <div className="col-md-12">
                        <label className='col-md-3'>Product Name:</label>
                        <span className='form-control-static'>{productTwo.name} ({productTwo.sku})</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label className='col-md-3'>Description:</label>
                        <span className='form-control-static'>{productTwo.description}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label className='col-md-3'>Price:</label>
                        <span className='form-control-static'>${productTwo.price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsComponent;