import { Reducer } from 'redux';
import { typeState, typeTypes } from './types';

const INITIAL_STATE: typeState = {
  data: undefined,
  error: false,
  loading: false,
};

const reducer: Reducer<typeState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case typeTypes.FETCH_TYPE_REQUEST:
      return { ...state, loading: true };
    case typeTypes.FETCH_TYPE_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case typeTypes.FETCH_TYPE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: undefined,
      };
    default:
      return state;
  }
};

export default reducer;
