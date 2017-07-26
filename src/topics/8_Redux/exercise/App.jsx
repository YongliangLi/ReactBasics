import React from 'react';
import HeaderTitle from './HeaderTitle.jsx';
import Products from "./Products.jsx";
import '../../../shared/site.css';

export default class App8Exercise extends React.Component {
    constructor(){
        super();

        this.state = {
            cartItems: []
        }
    }

    handleCartItemAdded = (product) => {
        this.setState((prevState) => {
            const items = Array.of(...prevState.cartItems, product);
            return {cartItems: items}
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <HeaderTitle text="I'm a prop being passed in" cartItems={this.state.cartItems}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <Products cartItemAdded={this.handleCartItemAdded}/>
                    </div>
                </div>
            </div>
        );
    }
}
