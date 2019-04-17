declare module 'store' {
  export type StoreState = ReturnType<
    typeof import('../store/modules/index').default
  >;
}
