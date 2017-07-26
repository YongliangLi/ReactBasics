import React from 'react';
import PropTypes from 'prop-types';

function HeaderTitle({text, totalCartItems}){
    return (
        <div>
            <h3 className="text-center" style={{textDecoration: 'underline'}}>{text}</h3>
            <h5 className="text-center">Total Cart Items: {totalCartItems}</h5>
        </div>
    );
}

HeaderTitle.propTypes = {
    text: PropTypes.string.isRequired,
    totalCartItems: PropTypes.number.isRequired
};

export default HeaderTitle;