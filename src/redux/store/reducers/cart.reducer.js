import { addItemToCartUtil } from '../../../utils/cart';
import { cartActionTypes } from '../actionsTypes';

const INITIAL_STATE = {
  cartPreview: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_PREVIEW:
      return {
        ...state,
        cartPreview: !state.cartPreview,
      };

    case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCartUtil(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    default:
      return state;
  }
};

export default cartReducer;
