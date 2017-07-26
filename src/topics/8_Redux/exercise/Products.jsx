import React from 'react';
import ProductSummary from './ProductSummary.jsx';
import {ProductData} from '../../MockData';

export default class Products extends React.Component {
    constructor(props){
        super(props);

        this.handleShowAllClick = this.handleShowAllClick.bind(this);

        this.products = ProductData;
        this.state = {
            products: []
        };
    }

    handleShowAllClick(event){
        event.preventDefault();
        this.setState({ selectedId: null, products: this.products });
    }

    handleShowLaptopsClick = (event) => {
        event.preventDefault();
        this.setState({ selectedId: null, products: this.products.filter(c => c.category.toLowerCase() === 'laptop') });
    }

    handleShowDesktopsClick(event) {
        event.preventDefault();
        this.setState({ selectedId: null, products: this.products.filter(c => c.category.toLowerCase() === 'desktop') });
    }

    handleCartItemAdded = (product) => {
        this.props.cartItemAdded(product);
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <button className="btn btn-block btn-primary" onClick={this.handleShowAllClick}>All</button>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-block btn-primary" onClick={this.handleShowLaptopsClick}>Laptops</button>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-block btn-primary" onClick={(e) => this.handleShowDesktopsClick(e)}>Desktops</button>
                    </div>
                </div>
                {
                    this.state.products.map(product => {
                        return (
                            <ProductSummary key={product.id} id={product.id} product={product} cartItemAdded={this.handleCartItemAdded} />
                        )
                    })
                }
            </div>
        );
    }
}