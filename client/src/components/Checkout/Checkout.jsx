import classes from './Checkout.module.scss';
import React from 'react';
import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartItemsTotal,
} from '../../redux/store/cart/cart.selectors';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import { StripeButton } from '../StripeCheckout/StripeButton';

const Checkout = ({ cartItems, cartTotal }) => {
  return (
    <div className={classes.Checkout}>
      <div className={classes.Header}>
        <div className={classes.HeaderCol}>
          <span>Product</span>
        </div>
        <div className={classes.HeaderCol}>
          <span>Description</span>
        </div>
        <div className={classes.HeaderCol}>
          <span>Quantity</span>
        </div>
        <div className={classes.HeaderCol}>
          <span>Price</span>
        </div>
        <div className={classes.HeaderCol}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems &&
        cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)}
      <div className={classes.Total}>TOTAL: ${cartTotal}</div>
      <div className={classes.TestWarning}>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
      </div>
      <StripeButton price={cartTotal} />
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  cartTotal: selectCartItemsTotal(state),
});

export default connect(mapStateToProps)(Checkout);
