import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from '../../lib/database/config/fbConfig';
import firebase from 'firebase/app'
// create a makeStore function

const initialState = {};
// const middleware = [thunk];

export const store = () => createStore(rootReducer,
  compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reduxFirestore(fbConfig)
  )
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}




// export an assembled wrapper
export const wrapper = createWrapper(store, { debug: true });
