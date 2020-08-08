// import Router from 'next/router';
// import { GET_DATA_SERVER, GET_DATA_CLIENT, GET_FIRESTORE_DATA } from '../types/types';


// const getDataClient = () => {
//   return async (dispatch, getState, { getFirebase, getFirestore }) => {
//   const firestore = await getFirestore();
//   firestore
//     .collection('products')
//     .get()
//     .then((data) => {
//       dispatch({
//         type: "GET_FIRESTORE_DATA",
//         data
//       });
//     });
// }};

// export default getDataClient;