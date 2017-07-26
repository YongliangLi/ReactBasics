import React from 'react';
import PropTypes from 'prop-types';

export default class ProductSummary extends React.Component {
    constructor(props){
        super(props);
    }

    nameClick = (event) => {
      event.preventDefault();
      this.props.handleClick(this.props.product.id);
    };

    addToCart = (event) => {
        event.preventDefault();
        this.props.cartItemAdded(this.props.product);
    };

    render(){
        const fullProductName = `${this.props.product.name} (${this.props.product.sku})`;

        return (
            <div className="product-list-item">
                <div className="row">
                    <div className="col-md-9">
                        <label className='col-md-4'>Product Name</label>
                        <a className='form-control-static' onClick={this.nameClick}>{fullProductName}</a>
                    </div>
                    <div className="col-md-3" style={{paddingTop: '5px'}}>
                        <button type="button" className="btn btn-block btn-default" onClick={this.addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

ProductSummary.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        sku: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number
    })
};