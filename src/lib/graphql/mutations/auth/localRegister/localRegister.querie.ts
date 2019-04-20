import { gql } from 'apollo-boost';

export const LOCAL_REGISTER = gql`
    mutation LocalRegister($register_token: String!, $form: {
        display_name: String!
        username: String!
        short_bio: String!
    }) {
        LocalRegister(register_token: $register_token, form: $form) {
            ok
            error
            payload
            register
        }
    }
`;
