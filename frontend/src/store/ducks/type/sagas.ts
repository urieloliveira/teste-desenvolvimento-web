/* eslint-disable no-plusplus */
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { fetchTypeSuccess, fetchTypeFailure } from './actions';
import { ITypeRes, typeTypes } from './types';

const getType = () => api.get<ITypeRes>(`/type`);

export function* fetchType() {
  try {
    const response: AxiosResponse<ITypeRes> = yield call(getType);

    yield put(fetchTypeSuccess(response.data));
  } catch (err) {
    yield put(fetchTypeFailure());
  }
}

function* typeSaga() {
  yield all([takeLatest(typeTypes.FETCH_TYPE_REQUEST, fetchType)]);
}

export default typeSaga;
