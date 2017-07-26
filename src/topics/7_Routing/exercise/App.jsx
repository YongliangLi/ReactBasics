import React from 'react';
import HeaderTitle from './HeaderTitle.jsx';
import Products from "./Products.jsx";
import '../../../shared/site.css';

export default class App7Exercise extends React.Component {
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
        //DO NOT DELETE THIS CONSOLE
        console.log('in App Component');

        return (
            <div>
                <div className="row">
                    <div className="col-md-5 col-md-offset-4">
                        <b>Note:</b>
                        <ul>
                            <li>
                                A general route has been setup for this exercise (/Routing-Exercise). This will allow
                                you to refresh properly.
                            </li>
                        </ul>

                        <b>Task:</b>
                        <ul>
                            <li>
                                Display the Search Component and Filtering Buttons always.
                            </li>
                            <li>
                                Generate a nested route /Routing-Exercise/Products, which will display the Product Summary
                                List based upon the search/filtering criteria. Use query string parameters if necessary.
                                qs (<a href="https://github.com/ljharb/qs" target="_blank">https://github.com/ljharb/qs</a>) has
                                already been installed for you to use if you want.
                            </li>
                            <li>
                                Extend this nested route to be able to take a productId. Upon clicking on the Product Name
                                in the Product Summary, navigate to this route and display the Product Details below the
                                search and filtering. Do not display the Product List.
                            </li>
                            <li>
                                Refer back to the react-router documentation
                                (<a href="https://reacttraining.com/react-router/web/guides/philosophy" target="_blank">https://reacttraining.com/react-router/web/guides/philosophy</a>)
                                if necessary. Also the react-router-dom has already been installed for you
                            </li>
                        </ul>

                        <b>Bonus:</b>
                        <ul>
                            <li>
                                Notice a console.log that is the first line inside the render of the App component.
                                Upon entering this exercise, you will see this console being logged. Make sure that
                                upon any searching/filtering, this console does not log. You may have already done this
                                during your implementation of the task.
                            </li>
                            <li>
                                Wire up the "Add to Cart" buttons so that we display the total cart items in the header.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <h3 className="text-center">ROUTING</h3>
                    </div>
                </div>
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

                {/* YOUR PRODUCT LIST AND PRODUCT DETAILS WILL GO DOWN IN THIS AREA */}
            </div>
        );
    }
}
