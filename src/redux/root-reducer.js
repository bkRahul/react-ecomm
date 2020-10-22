import { combineReducers } from 'redux';
import cartReducer from './store/reducers/cart.reducer';
import userReducer from './store/reducers/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
