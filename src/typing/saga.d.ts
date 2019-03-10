declare module 'saga-action-types' {
  export interface sagaAction<A = any, P = any> {
    type: T;
    payload: P;
  }
}
