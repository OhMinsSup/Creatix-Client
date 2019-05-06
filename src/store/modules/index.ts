import { combineReducers } from 'redux';
import base from './base';
import auth from './auth';
import write from './write';

const rootReudcer = combineReducers({
  base,
  auth,
  write,
});

export type StoreState = ReturnType<typeof rootReudcer>;

export default rootReudcer;
