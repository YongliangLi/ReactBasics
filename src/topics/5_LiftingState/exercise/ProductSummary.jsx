import React from 'react';
import PropTypes from 'prop-types';

export default class ProductSummary extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showDetails: false
        }
    }

    handleNameClick = (event) => {
      event.preventDefault();
      this.setState({ showDetails: true });
    };

    render(){
        const fullProductName = `${this.props.product.name} (${this.props.product.sku})`//,
            // productInfo = this.state.showDetails ?
            //     (
            //         <div className="product-list-item">
            //             <div className="row">
            //                 <div className="col-md-12">
            //                     <label className='col-md-3'>Product Name</label>
            //                     <span className='form-control-static'>{fullProductName}</span>
            //                 </div>
            //             </div>
            //             <div className="row">
            //                 <div className="col-md-12">
            //                     <label className='col-md-3'>Description</label>
            //                     <span className='form-control-static'>{this.props.product.description}</span>
            //                 </div>
            //             </div>
            //             <div className="row">
            //                 <div className="col-md-12">
            //                     <label className='col-md-3'>Price</label>
            //                     <span className='form-control-static'>${this.props.product.price}</span>
            //                 </div>
            //             </div>
            //         </div>
            //     ) :
            //     (
            //         <div className="product-list-item">
            //             <div className="row">
            //                 <div className="col-md-12">
            //                     <label className='col-md-3'>Product Name</label>
            //                     <a className='form-control-static' onClick={this.handleNameClick}>{fullProductName}</a>
            //                 </div>
            //             </div>
            //         </div>
            //     )
        ;


        return (
            <div>
                {/*{productInfo}*/}
                {
                    this.state.showDetails ?
                        (
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
                                        <span className='form-control-static'>{this.props.product.description}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className='col-md-3'>Price</label>
                                        <span className='form-control-static'>${this.props.product.price}</span>
                                    </div>
                                </div>
                            </div>
                        ) :
                        (
                            <div className="product-list-item">
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className='col-md-3'>Product Name</label>
                                        <a className='form-control-static' onClick={this.handleNameClick}>{fullProductName}</a>
                                    </div>
                                </div>
                            </div>
                        )
                }
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