import React from 'react';
import {Observable} from 'rxjs/Rx';
import ProductSummary from './ProductSummary.jsx';
import ProductDetails from './ProductDetails.jsx';
import Search from './Search.jsx';
import {ProductData} from '../../MockData';

export default class Products extends React.Component {
    constructor(props){
        super(props);

        this.handleShowAllClick = this.handleShowAllClick.bind(this);

        this.products = ProductData;
        this.state = {
            numberOfTicks: 0,
            products: [],
            selectedId: null
        };
    }

    componentDidMount(){
        this.interval = Observable.interval(1000).subscribe(() => this.setState((prevState) => ({numberOfTicks : prevState.numberOfTicks + 1})));
    }

    componentWillUnmount(){
        this.interval.unsubscribe();
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

    handleShowDetails = (id) => {
        this.setState({ selectedId: id });
    }

    handleCartItemAdded = (product) => {
        this.props.cartItemAdded(product);
    }

    handleSearchClick = (searchObj) => {
        const tempProducts = searchObj.searchType === 'name' ?
            this.products.filter(product => product.name.toLowerCase().includes(searchObj.searchInput.toLowerCase())) :
            this.products.filter(product => product.category.toLowerCase() === searchObj.searchInput.toLowerCase());

      this.setState({products: tempProducts});
    };

    render(){
        const selectedProduct = this.state.products.find(product =>
            this.state.selectedId && product.id === this.state.selectedId);

        return (
            <div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <span className="text-center">Number of Ticks: {this.state.numberOfTicks}</span>
                    </div>
                </div>
                <div className="search-wrapper">
                    <Search handleClick={this.handleSearchClick} />
                </div>
                <hr />
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
                {/*{*/}
                    {/*this.state.products.map(product => {*/}
                        {/*return (*/}
                            {/*<ProductSummary key={product.id} id={product.id} product={product}*/}
                                            {/*handleClick={this.handleShowDetails} cartItemAdded={this.handleCartItemAdded} />*/}
                        {/*)*/}
                    {/*})*/}
                {/*}*/}

                {/*{*/}
                    {/*selectedProduct && <ProductDetails product={selectedProduct} cartItemAdded={this.handleCartItemAdded}/>*/}
                {/*}*/}
            </div>
        );
    }
}