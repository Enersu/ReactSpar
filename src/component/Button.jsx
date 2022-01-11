import React from 'react';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`button ${props.className} ${props.outline ? 'button--outline' : ''}`}>
      {props.children}
    </button>
  );
};

export default Button;
