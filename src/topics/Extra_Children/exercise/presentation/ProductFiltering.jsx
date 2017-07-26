import React from 'react'
import PropTypes from 'prop-types';

function ProductFiltering({onFilterClick}){
    const onFilterAllClick = (event) => {
        event.preventDefault();
        onFilterClick('all');
    },
        onFilterLaptopClick = (event) => {
            event.preventDefault();
            onFilterClick('laptop');
        },
        onFilterDesktopClick = (event) => {
            event.preventDefault();
            onFilterClick('desktop');
        };

    return (
        <div className="row">
            <div className="col-md-4">
                <button className="btn btn-block btn-primary" onClick={onFilterAllClick}>All</button>
            </div>
            <div className="col-md-4">
                <button className="btn btn-block btn-primary" onClick={onFilterLaptopClick}>Laptops</button>
            </div>
            <div className="col-md-4">
                <button className="btn btn-block btn-primary" onClick={onFilterDesktopClick}>Desktops</button>
            </div>
        </div>
    );
}

ProductFiltering.PropTypes = {
    onFilterClick: PropTypes.func.isRequired
}

export default ProductFiltering;