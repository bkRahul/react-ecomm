import React from 'react';
import classes from './Button.module.scss';

export const Button = ({ disabled, btnType, clicked, children }) => {
  return (
    <button
      disabled={disabled}
      className={[classes.Button, classes[btnType]].join(' ')}
      onClick={clicked}
    >
      {children}
    </button>
  );
};
