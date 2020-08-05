import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import storeReducers from '../reducers/index';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from '../../paw-centre-key.json'
// create a makeStore function

const initialState = {};
// const middleware = [thunk];

const makeStore = (initialState = {}) => {
  return createStore(
    storeReducers,
    initialState,
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirestore })),
      reduxFirestore(fbConfig)
    )
  );
};

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
