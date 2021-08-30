import { action } from 'typesafe-actions';
import { typeTypes, ITypeRes } from './types';

export const fetchTypeRequest = () => action(typeTypes.FETCH_TYPE_REQUEST);

export const fetchTypeSuccess = (data: ITypeRes) =>
  action(typeTypes.FETCH_TYPE_SUCCCES, { data });

export const fetchTypeFailure = () => action(typeTypes.FETCH_TYPE_FAILURE);
