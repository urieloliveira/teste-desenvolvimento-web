/**
 * Action types
 */
export enum weatherTypes {
  FETCH_WEATHER_REQUEST = '@weather/FETCH_WEATHER_REQUEST',
  FETCH_WEATHER_SUCCCES = '@weather/FETCH_WEATHER_SUCCCES',
  FETCH_WEATHER_FAILURE = '@weather/FETCH_WEATHER_FAILURE',
}

/**
 * Data types
 */

export interface IWeather {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface IWeatherRes {
  data: IWeather[];
}

/**
 * State type
 */
export interface weatherState {
  readonly data: IWeatherRes | undefined;
  readonly loading: boolean;
  readonly error: boolean;
}
