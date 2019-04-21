import { gql } from 'apollo-boost';

export const LOCAL_REGISTER = gql`
  mutation LocalRegister(
    $register_token: String!
    $display_name: String!
    $username: String!
    $short_bio: String!
  ) {
    LocalRegister(
      register_token: $register_token
      display_name: $display_name
      username: $username
      short_bio: $short_bio
    ) {
      ok
      error
      payload
      register {
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
