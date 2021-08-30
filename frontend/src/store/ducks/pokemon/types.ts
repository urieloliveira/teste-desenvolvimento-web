import { IType } from '../type/types';

/**
 * Action types
 */
export enum pokemonTypes {
  FETCH_POKEMON_REQUEST = '@pokemon/FETCH_POKEMON_REQUEST',
  FETCH_POKEMON_SUCCCES = '@pokemon/FETCH_POKEMON_SUCCCES',
  FETCH_POKEMON_FAILURE = '@pokemon/FETCH_POKEMON_FAILURE',
}

/**
 * Data types
 */

export interface IPokemon {
  id: number;
  img_name: number;
  name: string;
  generation: number;
  evolution_stage: number;
  evolved: boolean;
  family_id: number;
  cross_gen: boolean;
  types: IType[];
  weathers: { id: number; name: string }[];
  stat_total: number;
  atk: number;
  def: number;
  sta: number;
  legendary: boolean;
  aquireable: number;
  spawns: boolean;
  regional: boolean;
  raidable: number;
  hatchable: number;
  shiny: boolean;
  nest: boolean;
  new: boolean;
  not_gettable: boolean;
  future_evolve: boolean;
  cp40: number;
  cp39: number;
  created_at: string;
  updated_at: string;
}

export interface IPokemonRes {
  meta: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    first_page: number;
    first_page_url: string;
    last_page_url: string;
    next_page_url: string | null;
    previous_page_url: string | null;
  };
  data: IPokemon[];
}

/**
 * State type
 */
export interface pokemonState {
  readonly data: IPokemonRes | undefined;
  readonly loading: boolean;
  readonly error: boolean;
}
