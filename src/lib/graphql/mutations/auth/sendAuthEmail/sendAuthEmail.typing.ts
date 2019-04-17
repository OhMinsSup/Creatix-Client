// ====================================================
// GraphQL mutation operation: SendAuthEmail
// ====================================================
export interface sendAuthEmail_SendAuthEmail {
  __typename: 'SendAuthEmailResponse';
  registered: boolean;
}

export interface sendAuthEmail {
  SendAuthEmail: sendAuthEmail_SendAuthEmail;
}

export interface sendAuthEmailVariables {
  email: string;
}
