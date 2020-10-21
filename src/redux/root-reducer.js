import { combineReducers } from 'redux';
import userReducer from './store/reducers/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
});
