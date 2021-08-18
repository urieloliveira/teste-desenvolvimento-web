import { Reducer } from 'redux';
import { pokemonState, pokemonTypes } from './types';

const INITIAL_STATE: pokemonState = {
  data: undefined,
  error: false,
  loading: false,
};

const reducer: Reducer<pokemonState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pokemonTypes.FETCH_POKEMON_REQUEST:
      return { ...state, loading: true };
    case pokemonTypes.FETCH_POKEMON_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case pokemonTypes.FETCH_POKEMON_FAILURE:
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
