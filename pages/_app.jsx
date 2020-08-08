import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper, newStore } from '../redux/index.js';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'firebase/app';
import fbConfig from '../lib/database/config/fbConfig.js';

import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  // Initialize firebase instance
  const rrfConfig = { userProfile: 'users' }; // react-redux-firebase config

  if (!firebase.apps.length) {
    firebase.initializeApp(fbConfig);
  }

  const store = newStore();

  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  };

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <NavBar />
        <Component {...pageProps} />
        <div>
          <style jsx>{`
            body {
              margin: 0px;
              padding: 0px;
            }
          `}</style>
        </div>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default wrapper.withRedux(MyApp);
