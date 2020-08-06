import { GET_DATA_SERVER, GET_DATA_CLIENT, GET_FIRESTORE_DATA } from '../types/types';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  // server: null,
  // client: null
  products: [
    {id: '1', name: 'chew toy', price: 55},
    {id: '2', name: 'vest', price: 80},
    {id: '3', name: 'leash', price: 60}
  ]
};

// create your reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case GET_DATA_SERVER:
      return { ...state, server: action.payload };
    case GET_DATA_CLIENT:
      return { ...state, client: action.payload };
    case GET_FIRESTORE_DATA:
      return { ...state, client: action.payload };
    default:
      return state;
  }
};

export default reducer;
