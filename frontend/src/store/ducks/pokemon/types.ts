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
  imgName: number;
  name: string;
  generation: number;
  evolutionStage: number;
  evolved: boolean;
  familyId: number;
  crossGen: boolean;
  statTotal: number;
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
  notGettable: boolean;
  futureEvolve: boolean;
  cp40: number;
  cp39: number;
}

export interface IPokemonRes {
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
