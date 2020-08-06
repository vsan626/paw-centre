import { combineReducers } from 'redux';
import storeReducers from './storeReducers';
import { firestoreReducer } from 'redux-firestore' //premade reducer for syncing firebase reducer with our store

const rootReducer = combineReducers({
  storeItems: storeReducers,
  firestore: firestoreReducer
})

export default rootReducer