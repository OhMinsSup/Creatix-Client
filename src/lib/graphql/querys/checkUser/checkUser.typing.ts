// ====================================================
// GraphQL query operation: CheckUser
// ====================================================

export interface checkUser_CheckUser {
  __typename: 'CheckUserResponse';
  ok: boolean;
  error: string | null;
  user: {
    id: string;
    username: string;
    email: string;
    display_name: string;
    thumbnail: string | null;
  } | null;
}

export interface checkUser {
  CheckUser: checkUser_CheckUser;
}
