import { createStandardAction, getType } from 'typesafe-actions';
import produce from 'immer';

export enum AuthActionTypes {
  SET_REGISTER_TOKEN = 'auth/SET_REGISTER_TOKEN',
  SET_USER_DATA = 'auth/SET_USER_DATA',
}

export const setRegisterToken = createStandardAction(
  AuthActionTypes.SET_REGISTER_TOKEN,
).map((payload: { email: string; register_token: string }) => payload);
export const setUserData = createStandardAction(
  AuthActionTypes.SET_USER_DATA,
).map(
  (payload: {
    user: {
      id: string;
      email: string;
      username: string;
      display_name: string;
      thumbnail: string | null;
    };
  }) => payload,
);

type SetRegisterToken = ReturnType<typeof setRegisterToken>;
type SetUserData = ReturnType<typeof setUserData>;

type AuthActions = SetRegisterToken | SetUserData;

export interface AuthState {
  register: {
    email: string;
    register_token: string;
  } | null;
  user: {
    id: string;
    email: string;
    username: string;
    display_name: string;
    thumbnail: string | null;
  } | null;
}

const initialState: Readonly<AuthState> = {
  register: null,
  user: null,
};

const reducer = (state: AuthState = initialState, action: AuthActions) => {
  switch (action.type) {
    case getType(setRegisterToken):
      return produce(state, draft => {
        draft.register = {
          email: action.email,
          register_token: action.register_token,
        };
      });
    case getType(setUserData):
      return produce(state, draft => {
        draft.user = action.user;
      });
    default:
      return state;
  }
};

export default reducer;
