/* eslint-disable no-plusplus */
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { fetchWeatherSuccess, fetchWeatherFailure } from './actions';
import { IWeatherRes, weatherTypes } from './types';

const getWeather = () => api.get<IWeatherRes>(`/weather`);

export function* fetchWeather() {
  try {
    const response: AxiosResponse<IWeatherRes> = yield call(getWeather);

    yield put(fetchWeatherSuccess(response.data));
  } catch (err) {
    yield put(fetchWeatherFailure());
  }
}

function* weatherSaga() {
  yield all([takeLatest(weatherTypes.FETCH_WEATHER_REQUEST, fetchWeather)]);
}

export default weatherSaga;
