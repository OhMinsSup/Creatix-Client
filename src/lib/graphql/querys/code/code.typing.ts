// ====================================================
// GraphQL query operation: Code
// ====================================================

type CodeRegister = {
  email: string;
  register_token: string;
};

type CodeLogin = {
  id: string;
  username: string;
  email: string;
  display_name: string;
  thumbnail: string | null;
  access_token: string;
  refresh_token: string;
};

export interface code_Code {
  __typename: 'CodeResponse';
  ok: boolean;
  error: string | null;
  registerResult?: CodeRegister;
  loginResult?: CodeLogin;
}

export interface code {
  Code: code_Code;
}

export interface codeVariables {
  code: string;
}
