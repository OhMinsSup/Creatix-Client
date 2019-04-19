import { gql } from 'apollo-boost';

export const CODE = gql`
  query Code($code: String!) {
    Code(code: $code) {
      ok
      error
      registerResult {
        email
        register_token
      }
      loginResult {
        id
        username
        email
        display_name
        thumbnail
        access_token
        refresh_token
      }
    }
  }
`;
