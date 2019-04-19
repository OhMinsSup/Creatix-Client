import { gql } from 'apollo-boost';

export const SEND_AUTH_EMAIL = gql`
  mutation SendAuthEmail($email: String!) {
    SendAuthEmail(email: $email) {
      ok
      error
      registered
    }
  }
`;
