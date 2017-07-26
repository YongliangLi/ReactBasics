import React from 'react';
import HeaderTitle from './HeaderTitle.jsx';
import Products from "./Products.jsx";
import '../../../shared/site.css';

function App(){
    return (
        <div>
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <HeaderTitle text="I'm a prop being passed in" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <Products/>
                </div>
            </div>
        </div>
    );
}

export default App;
