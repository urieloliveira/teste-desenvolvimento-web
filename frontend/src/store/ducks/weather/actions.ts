import { action } from 'typesafe-actions';
import { weatherTypes, IWeatherRes } from './types';

export const fetchWeatherRequest = () =>
  action(weatherTypes.FETCH_WEATHER_REQUEST);

export const fetchWeatherSuccess = (data: IWeatherRes) =>
  action(weatherTypes.FETCH_WEATHER_SUCCCES, { data });

export const fetchWeatherFailure = () =>
  action(weatherTypes.FETCH_WEATHER_FAILURE);
