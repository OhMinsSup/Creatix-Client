import { combineReducers } from 'redux';
import base from './base';
import auth from './auth';

const rootReudcer = combineReducers({
  base,
  auth,
});

export type StoreState = ReturnType<typeof rootReudcer>;

export default rootReudcer;
