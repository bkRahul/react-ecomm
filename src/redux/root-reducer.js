import { combineReducers } from 'redux';
import cartReducer from './store/cart/cart.reducer';
import userReducer from './store/user/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
