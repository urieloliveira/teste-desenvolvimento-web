/**
 * Action types
 */
export enum typeTypes {
  FETCH_TYPE_REQUEST = '@type/FETCH_TYPE_REQUEST',
  FETCH_TYPE_SUCCCES = '@type/FETCH_TYPE_SUCCCES',
  FETCH_TYPE_FAILURE = '@type/FETCH_TYPE_FAILURE',
}

/**
 * Data types
 */

export interface IType {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface ITypeRes {
  data: IType[];
}

/**
 * State type
 */
export interface typeState {
  readonly data: ITypeRes | undefined;
  readonly loading: boolean;
  readonly error: boolean;
}
