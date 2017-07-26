import React from 'react';
import PropTypes from 'prop-types';

function HeaderTitle(props){
    return (
      <h3 className="text-center" style={{textDecoration: 'underline'}}>{props.text}</h3>
    );
}

HeaderTitle.propTypes = {
    text: PropTypes.string
};

export default HeaderTitle;