import { createStandardAction, getType } from 'typesafe-actions';
import { SetWidthPayload, SetErrorPayload } from 'base-store';

export enum BaseActionTypes {
  SET_WIDTH = 'base/SET_WIDTH',
  SET_ERROR = 'base/SET_ERROR',

  OPEN_GRALLY = 'base/OPEN_GRALLY',
  CLOSE_GRALLY = 'base/CLOSE_GRALLY',

  OPEN_AUTH_MODAL = 'base/OPEN_AUTH_MODAL',
  CLOSE_AUTH_MODAL = 'base/CLOSE_AUTH_MODAL',
}

export const setWidth = createStandardAction(BaseActionTypes.SET_WIDTH)<
  SetWidthPayload
>();
export const setError = createStandardAction(BaseActionTypes.SET_ERROR)<
  SetErrorPayload
>();
export const openGrally = createStandardAction(BaseActionTypes.OPEN_GRALLY)();
export const closeGrally = createStandardAction(BaseActionTypes.CLOSE_GRALLY)();
export const openAuthModal = createStandardAction(
  BaseActionTypes.OPEN_AUTH_MODAL,
)();
export const closeAuthModal = createStandardAction(
  BaseActionTypes.CLOSE_AUTH_MODAL,
)();

type CloseAuthModal = ReturnType<typeof closeAuthModal>;
type OpenAuthModal = ReturnType<typeof openAuthModal>;
type OpenGrally = ReturnType<typeof openGrally>;
type CloseGrally = ReturnType<typeof closeGrally>;
type SetWidth = ReturnType<typeof setWidth>;
type SetError = ReturnType<typeof setError>;
type BaseActions =
  | SetWidth
  | SetError
  | OpenGrally
  | CloseGrally
  | CloseAuthModal
  | OpenAuthModal;

export interface BaseState {
  layer: {
    width: number;
  };
  error: {
    name: string;
    message: string;
  } | null;
  grally: {
    visible: boolean;
  };
  auth_modal: {
    visible: boolean;
  };
}

const initialState: Readonly<BaseState> = {
  layer: {
    width: 1920,
  },
  error: null,
  grally: {
    visible: false,
  },
  auth_modal: {
    visible: false,
  },
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
    case getType(openGrally):
      return {
        ...state,
        grally: {
          visible: true,
        },
      };
    case getType(closeGrally):
      return {
        ...state,
        grally: {
          visible: false,
        },
      };
    case getType(openAuthModal):
      return {
        ...state,
        auth_modal: {
          visible: true,
        },
      };
    case getType(closeAuthModal):
      return {
        ...state,
        auth_modal: {
          visible: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
