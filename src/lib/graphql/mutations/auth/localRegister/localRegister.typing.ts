// ====================================================
// GraphQL mutation operation: LocalRegister
// ====================================================
export interface Register {
  id: string;
  username: string;
  email: string;
  display_name: string;
  thumbnail: string | null;
  access_token: string;
  refresh_token: string;
}

export interface localRegister_LocalRegister {
  __typename: 'LocalRegisterResponse';
  ok: boolean;
  error: string | null;
  payload?: string;
  register?: Register;
}

export interface localRegister {
  LocalRegister: localRegister_LocalRegister;
}

export interface localRegisterVariables {
  register_token: string;
  display_name: string;
  username: string;
  short_bio: string;
}
