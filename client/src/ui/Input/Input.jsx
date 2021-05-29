import React from 'react';
import classes from './Input.module.scss';

const Input = ({ elementType, label, changed, ...elementConfig }) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  //   if (invalid && shouldValidate && touched) {
  //     inputClasses.push(classes.Invalid);
  //   }

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...elementConfig}
          onChange={changed}
        ></input>
      );
      break;

    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses}
          {...elementConfig}
          onChange={changed}
        />
      );
      break;

    case 'select':
      inputElement = (
        <select className={inputClasses} onChange={changed}>
          {elementConfig.options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;

    default:
      inputElement = (
        <input className={inputClasses} {...elementConfig}></input>
      );
      break;
  }

  return (
    <div className={classes.Input}>
      <label
        className={`${classes.Label} ${
          elementConfig.value.length ? classes.Shrink : ''
        } `}
      >
        {label}
      </label>
      {inputElement}
    </div>
  );
};

export default Input;
