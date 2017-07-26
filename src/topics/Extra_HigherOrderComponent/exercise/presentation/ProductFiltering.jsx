import React from 'react'
import PropTypes from 'prop-types';
import {Button} from '../controls'

function ProductFiltering({onFilterClick}){
    const onClick = (value) => {onFilterClick(value)};

    return (
        <div className="row">
            <div className="col-md-4">
                <Button value="all" onClick={onClick}>All</Button>
            </div>
            <div className="col-md-4">
                <Button value="laptop" onClick={onClick}>Laptops</Button>
            </div>
            <div className="col-md-4">
                <Button value="desktop" onClick={onClick}>Desktops</Button>
            </div>
        </div>
    );
}

ProductFiltering.propTypes = {
    onFilterClick: PropTypes.func.isRequired
}

export default ProductFiltering;