import { gql } from 'apollo-boost';

export const CHECK_USER = gql`
  query CheckUser {
    CheckUser {
      ok
      error
      user {
        id
        username
        email
        display_name
        thumbnail
      }
    }
  }
`;
