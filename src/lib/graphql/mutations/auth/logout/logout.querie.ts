import { gql } from 'apollo-boost';

export const LOTOUT = gql`
  mutation LogOut {
    LogOut {
      ok
    }
  }
`;
