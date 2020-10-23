import classes from './CartDropdownItem.module.scss';
import React from 'react';

export const CartDropdownItem = ({ item: { imageUrl, name, price, qty } }) => {
  return (
    <div className={classes.CartDropdownItem}>
      <img src={imageUrl} alt="product" />
      <div className={classes.ItemDetails}>
        <span className={classes.Name}>{name}</span>
        <span className="">
          {qty} &#10005; ${price}
        </span>
      </div>
    </div>
  );
};
