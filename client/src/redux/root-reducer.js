import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './store/cart/cart.reducer';
import categoryReducer from './store/category/category.reducer';
import shopReducer from './store/shop/shop.reducer';
import userReducer from './store/user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  shop: shopReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
