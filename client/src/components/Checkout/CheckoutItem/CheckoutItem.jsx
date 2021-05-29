import classes from './CheckoutItem.module.scss';
import React from 'react';
import { connect } from 'react-redux';
import {
  removeFromCart,
  decreaseItemQty,
  addToCart,
} from '../../../redux/store/cart/cart.actions';

const CheckoutItem = ({ cartItem, removeItem, decreaseQty, increaseQty }) => {
  const { imageUrl, name, qty, price } = cartItem;
  return (
    <div className={classes.CheckoutItem}>
      <div className={classes.ImageContainer}>
        <img src={imageUrl} alt="item" />
      </div>
      <span className={classes.Name}>{name}</span>
      <span className={classes.Quantity}>
        <div className={classes.Arrow} onClick={() => decreaseQty(cartItem)}>
          &#10094;
        </div>
        <span className={classes.Value}>{qty}</span>
        <div className={classes.Arrow} onClick={() => increaseQty(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className={classes.Price}>{price}</span>
      <div
        className={classes.RemoveButton}
        onClick={() => removeItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: cartItem => dispatch(removeFromCart(cartItem)),
  decreaseQty: cartItem => dispatch(decreaseItemQty(cartItem)),
  increaseQty: cartItem => dispatch(addToCart(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
