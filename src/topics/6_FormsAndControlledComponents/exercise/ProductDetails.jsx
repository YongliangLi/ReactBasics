import React from 'react';
import PropTypes from 'prop-types';

function ProductDetailsComponent(props){
    const fullProductName = `${props.product.name} (${props.product.sku})`;

    function addToCart(event){
        event.preventDefault();
        props.cartItemAdded(props.product);
    }

    return(
        <div>
            <h4>Product Details</h4>
            <div className="product-list-item">
                <div className="row">
                    <div className="col-md-12">
                        <label className='col-md-3'>Product Name</label>
                        <span className='form-control-static'>{fullProductName}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label className='col-md-3'>Description</label>
                        <span className='form-control-static'>{props.product.description}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label className='col-md-3'>Price</label>
                        <span className='form-control-static'>${props.product.price}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <button type="button" className="btn btn-block btn-default" onClick={addToCart}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductDetailsComponent.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        sku: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number
    })
};

export default ProductDetailsComponent;