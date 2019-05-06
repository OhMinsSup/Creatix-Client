import { createStandardAction, getType } from 'typesafe-actions';

export enum WriteActionTypes {
  OPEN_PUBLISH = 'write/OPEN_PUBLISH',
  CLOSE_PUBLISH = 'write/CLOSE_PUBLISH',
}

export const openPublish = createStandardAction(WriteActionTypes.OPEN_PUBLISH)<
  void
>();
export const closePublish = createStandardAction(
  WriteActionTypes.CLOSE_PUBLISH,
)<void>();

type OpenPublish = ReturnType<typeof openPublish>;
type ClosePublish = ReturnType<typeof closePublish>;
type WriteActions = OpenPublish | ClosePublish;

export interface WriteState {
  publish: boolean;
}

const initialState: Readonly<WriteState> = {
  publish: false,
};

const reducer = (state: WriteState = initialState, action: WriteActions) => {
  switch (action.type) {
    case getType(openPublish):
      return {
        ...state,
        publish: true,
      };
    case getType(closePublish):
      return {
        ...state,
        publish: false,
      };
    default:
      return state;
  }
};

export default reducer;
