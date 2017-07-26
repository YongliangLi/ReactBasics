import React from 'react';
import HeaderContainer from './containers/HeaderContainer';
import ProductFilteringContainer from './containers/ProductFilteringContainer';
import ProductListContainer from './containers/ProductListContainer';
import '../../../shared/site.css';

function App8Solution() {
    return (
        <div>
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <HeaderContainer text="I'm a prop being passed in"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <ProductFilteringContainer />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <ProductListContainer />
                </div>
            </div>
        </div>
    );
}

export default App8Solution;
