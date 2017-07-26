import React from 'react';
import {Observable} from 'rxjs/Rx';
import ProductSummary from './ProductSummary.jsx';
import {ProductData} from '../../MockData';

export default class Products extends React.Component {
    constructor(){
        super();

        this.products = ProductData;
        this.state = {
            numberOfTicks: 0
        };
    }

    componentDidMount(){
        this.interval = Observable.interval(1000).subscribe(() => this.setState((prevState) => ({numberOfTicks : prevState.numberOfTicks + 1})));
    }

    componentWillUnmount(){
        this.interval.unsubscribe();
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <span className="text-center">Number of Ticks: {this.state.numberOfTicks}</span>
                    </div>
                </div>
                {
                    this.products.map(product => {
                        return (
                            <ProductSummary key={product.id} id={product.id} product={product} handleClick={this.handleShowDetails} />
                        )
                    })
                }
            </div>
        );
    }
}