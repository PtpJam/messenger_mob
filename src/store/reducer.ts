import { combineReducers } from '@reduxjs/toolkit';
import { EStoreReducer } from './types';
import { userReducer } from './modules';

export default combineReducers({
  [EStoreReducer.user]: userReducer,
});
