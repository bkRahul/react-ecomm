import classes from './CheckoutItem.module.scss';
import React from 'react';

export const CheckoutItem = ({ cartItem: { imageUrl, name, qty, price } }) => {
  return (
    <div className={classes.CheckoutItem}>
      <div className={classes.ImageContainer}>
        <img src={imageUrl} alt="item" />
      </div>
      <span className={classes.Name}>{name}</span>
      <span className={classes.Quantity}>
        <div className={classes.Arrow}>&#10094;</div>
        <span className={classes.Value}>{qty}</span>
        <div className={classes.Arrow}>&#10095;</div>
      </span>
      <span className={classes.Price}>{price}</span>
      <div className={classes.RemoveButton}>&#10005;</div>
    </div>
  );
};
