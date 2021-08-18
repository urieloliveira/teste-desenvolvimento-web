/* eslint-disable no-plusplus */
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { fetchPokemonSuccess, fetchPokemonFailure } from './actions';
import { IPokemonRes, pokemonTypes } from './types';

const getPokemon = () => api.get<IPokemonRes>(`/pokemon`);

export function* fetchPokemon() {
  try {
    const response: AxiosResponse<IPokemonRes> = yield call(getPokemon);

    yield put(fetchPokemonSuccess(response.data));
  } catch (err) {
    yield put(fetchPokemonFailure());
  }
}

function* pokemonSaga() {
  yield all([takeLatest(pokemonTypes.FETCH_POKEMON_REQUEST, fetchPokemon)]);
}

export default pokemonSaga;
