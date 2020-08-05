import { combineReducers } from 'redux';
import storeReducers from './storeReducers';

export default combineReducers({
  storeItems: storeReducers
})