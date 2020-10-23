import classes from './CartIcon.module.scss';
import React from 'react';
import { ReactComponent as BagIcon } from '../../../../assets/svg/bag.svg';
import { connect } from 'react-redux';
import { toggleCartPreview } from '../../../../redux/store/cart/cart.actions';
import { selectCartItemsCount } from '../../../../redux/store/cart/cart.selectors';

const CartIcon = ({ toggleCartPreview, itemCount }) => {
  return (
    <div className={classes.Cart} onClick={toggleCartPreview}>
      <BagIcon className={classes.BagIcon} />
      <span className={classes.ItemCount}>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  //pass whole state to the selector
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCartPreview: () => dispatch(toggleCartPreview()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
