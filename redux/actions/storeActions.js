import Router from 'next/router';
import axios from 'axios';
import { GET_DATA_SERVER, GET_DATA_CLIENT } from '../types/types';

// const getDataClient = async (dispatch, getState, { getFirestore }) => {
//   const firestore = await getFirestore();
//   firestore
//     .collection('products')
//     .get()
//     .then((data) => {
//       dispatch({
//         type: GET_DATA_CLIENT,
//         payload: data
//       });
//     });
// };

// export default getDataClient;
