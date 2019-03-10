declare module 'store' {
  export type StoreState = ReturnType<
    typeof import('../store/modules/index').default
  >;
}

declare module 'base-store' {
  export type SetWidthPayload = number;
  export type SetErrorPayload = {
    name: string;
    message: string;
  } | null;
}
