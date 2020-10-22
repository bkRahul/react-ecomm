import classes from './CartIcon.module.scss';
import React from 'react';
import { ReactComponent as BagIcon } from '../../../../assets/svg/bag.svg';
import { connect } from 'react-redux';
import { toggleCartPreview } from '../../../../redux/store/actions/cart.actions';

const CartIcon = ({ toggleCartPreview }) => {
  return (
    <div className={classes.Cart} onClick={toggleCartPreview}>
      <BagIcon className={classes.BagIcon} />
      <span className={classes.ItemCount}>0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartPreview: () => dispatch(toggleCartPreview()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
