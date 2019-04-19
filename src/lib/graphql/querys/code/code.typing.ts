// ====================================================
// GraphQL query operation: Code
// ====================================================

type CodeRegister = {
  email: string;
  register_token: string;
};

type CodeLogin = {
  id: String;
  username: String;
  email: String;
  display_name: String;
  thumbnail: String;
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
