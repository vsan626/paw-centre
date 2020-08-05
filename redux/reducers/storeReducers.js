import { GET_DATA_SERVER, GET_DATA_CLIENT } from '../types/types';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  server: null,
  client: null
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
    default:
      return state;
  }
};

export default reducer;
