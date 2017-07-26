import React from 'react';
import PropTypes from 'prop-types';

export function Button({onClick, children, value, className}){
    const onButtonClick = (event) => {
        event.preventDefault();

        if(onClick)
            onClick(value);
    }

    return (
        <button type="button" className={`btn ${className || ''}`} onClick={onButtonClick}>{children}</button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func
}

const withButtonBlockPrimaryClass = (WrappedComponent) => {
    return class extends React.Component {
        render(){
            const btnPrimary = ' btn-block btn-primary';
            return (
                <div>
                    <WrappedComponent />
                </div>
            );
        }
    }
}