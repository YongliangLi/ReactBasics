import React from 'react';
import PropTypes from 'prop-types';

function HeaderTitle(props){
    return (
        <div>
            <h3 className="text-center" style={{textDecoration: 'underline'}}>{props.text}</h3>
            <h5 className="text-center">Total Cart Items: {props.cartItems.length}</h5>
        </div>
    );
}

HeaderTitle.propTypes = {
    text: PropTypes.string
};

export default HeaderTitle;