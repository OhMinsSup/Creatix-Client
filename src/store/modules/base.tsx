import { createStandardAction, getType } from 'typesafe-actions';
import { SetWidthPayload, SetErrorPayload } from 'base-store';

export enum BaseActionTypes {
  SET_WIDTH = 'base/SET_WIDTH',
  SET_ERROR = 'base/SET_ERROR',
}

export const setWidth = createStandardAction(BaseActionTypes.SET_WIDTH)<
  SetWidthPayload
>();
export const setError = createStandardAction(BaseActionTypes.SET_ERROR)<
  SetErrorPayload
>();

type SetWidth = ReturnType<typeof setWidth>;
type SetError = ReturnType<typeof setError>;
type BaseActions = SetWidth | SetError;

export interface BaseState {
  readonly layer: {
    readonly width: number;
  };
  readonly error: {
    readonly name: string;
    readonly message: string;
  } | null;
}

const initialState: BaseState = {
  layer: {
    width: 1920,
  },
  error: null,
};

const reducer = (
  state: BaseState = initialState,
  action: BaseActions,
): BaseState => {
  switch (action.type) {
    case getType(setWidth):
      return {
        ...state,
        layer: {
          width: action.payload,
        },
      };
    case getType(setError):
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
