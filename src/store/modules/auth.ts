import { createStandardAction, getType } from 'typesafe-actions';
import produce from 'immer';

export enum AuthActionTypes {
  SET_REGISTER_TOKEN = 'auth/SET_REGISTER_TOKEN',
}

export const setRegisterToken = createStandardAction(
  AuthActionTypes.SET_REGISTER_TOKEN,
).map((payload: { email: string; register_token: string }) => payload);

type SetRegisterToken = ReturnType<typeof setRegisterToken>;

type AuthActions = SetRegisterToken;

export interface AuthState {
  register: {
    email: string;
    register_token: string;
  } | null;
}

const initialState: Readonly<AuthState> = {
  register: null,
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
    default:
      return state;
  }
};

export default reducer;
