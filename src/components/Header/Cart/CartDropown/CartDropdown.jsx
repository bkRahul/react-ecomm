import classes from './CartDropdown.module.scss';
import React from 'react';
import { Button } from '../../../../ui/Button/Button';
import { CartDropdownItem } from '../CartDropdownItem/CartDropdownItem';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className={classes.CartDropdown}>
      <div className={classes.CartItems}>
        {cartItems.map(item => (
          <CartDropdownItem key={item.id} item={item} />
        ))}
      </div>
      <Button>Proceed to Checkout</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
