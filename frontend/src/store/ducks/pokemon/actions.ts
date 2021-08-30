import { action } from 'typesafe-actions';
import { pokemonTypes, IPokemonRes } from './types';

export const fetchPokemonRequest = () =>
  action(pokemonTypes.FETCH_POKEMON_REQUEST);

export const fetchPokemonSuccess = (data: IPokemonRes) =>
  action(pokemonTypes.FETCH_POKEMON_SUCCCES, { data });

export const fetchPokemonFailure = () =>
  action(pokemonTypes.FETCH_POKEMON_FAILURE);
