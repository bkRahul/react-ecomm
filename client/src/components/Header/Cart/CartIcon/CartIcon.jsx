import React from 'react';
import { connect } from 'react-redux';
import { toggleCartPreview } from '../../../../redux/store/cart/cart.actions';
import { selectCartItemsCount } from '../../../../redux/store/cart/cart.selectors';
import { Cart, ItemCount, BagIcon } from './CartIcon.styles';

const CartIcon = ({ toggleCartPreview, itemCount }) => {
  return (
    <Cart onClick={toggleCartPreview}>
      <BagIcon />
      <ItemCount>{itemCount}</ItemCount>
    </Cart>
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
