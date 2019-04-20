import React from 'react';
import qs from 'qs';
import { connect } from 'react-redux';
import { MutationFn, Mutation } from 'react-apollo';
import { toast } from 'react-toastify';
import { Location, History } from 'history';
import { StoreState } from '../../store/modules';
import { setRegisterToken } from '../../store/modules/auth';
import RegisterForm, {
  RegisterFormType,
} from '../../components/register/RegisterForm';
import CodeQuery from '../../lib/graphql/querys/code/code.query';
import { CODE } from '../../lib/graphql/querys/code/code.querie';
import LocalRegisterMutation from '../../lib/graphql/mutations/auth/localRegister/localRegister.mutation';
import { LOCAL_REGISTER } from '../../lib/graphql/mutations/auth/localRegister/localRegister.querie';
import {
  localRegister,
  localRegisterVariables,
} from '../../lib/graphql/mutations/auth/localRegister/localRegister.typing';
import { LOG_USER_IN } from '../../lib/graphql/shared/shared.querie';

const { useEffect, useState } = React;

interface OwnProps {
  location: Location;
  history: History;
}
interface StateProps {
  email: string | null;
  registerToken: string | null;
}
interface DispatchProps {
  setRegisterToken: typeof setRegisterToken;
}
type RegisterFormContainerProps = StateProps & DispatchProps & OwnProps;
const RegisterFormContainer: React.SFC<RegisterFormContainerProps> = ({
  email,
  registerToken,
  setRegisterToken,
  location,
  history,
}) => {
  let localRegisterFn: MutationFn<localRegister, localRegisterVariables>;

  const [error, setError] = useState<null | string>(null);
  const [code, setCode] = useState('');
  useEffect(() => {
    const query = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    if (!query.code) {
      // TODO 404
      history.replace('/');
    }
    setCode(query.code);
  }, []);

  const onSetRegister = (email: string, token: string) => {
    setRegisterToken({ email, register_token: token });
  };

  const onSubmit = async (form: RegisterFormType) => {
    localRegisterFn({
      variables: {
        register_token: registerToken || '',
        form: {
          display_name: form.displayName,
          username: form.username,
          short_bio: form.shortBio,
        },
      },
    });
  };
  return (
    <Mutation mutation={LOG_USER_IN}>
      {logUserIn => (
        <CodeQuery
          query={CODE}
          variables={{
            code,
          }}
          onCompleted={data => {
            const { Code } = data;
            if (Code.ok && Code.registerResult) {
              const { email, register_token } = Code.registerResult;
              onSetRegister(email, register_token);
            }
          }}
        >
          {() => {
            return (
              <LocalRegisterMutation
                mutation={LOCAL_REGISTER}
                onCompleted={data => {
                  const { LocalRegister } = data;
                  if (LocalRegister.ok && !!LocalRegister.register) {
                    const {
                      register: {
                        id,
                        username,
                        display_name,
                        thumbnail,
                        email,
                        refresh_token,
                        access_token,
                      },
                    } = LocalRegister;
                    logUserIn({
                      variables: {
                        token: {
                          accessToken: access_token,
                          refreshToken: refresh_token,
                        },
                        user: {
                          id,
                          email,
                          username,
                          display_name,
                          thumbnail,
                        },
                      },
                    });
                    history.push('/');
                  } else if (!LocalRegister.ok && LocalRegister.error) {
                    toast.error(LocalRegister.error);
                  }
                }}
              >
                {(localRegister, { loading }) => {
                  localRegisterFn = localRegister;
                  return (
                    <RegisterForm
                      defaultEmail={email}
                      error={error}
                      onSubmit={onSubmit}
                    />
                  );
                }}
              </LocalRegisterMutation>
            );
          }}
        </CodeQuery>
      )}
    </Mutation>
  );
};

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  ({ auth }) => ({
    email: auth.register && auth.register.email,
    registerToken: auth.register && auth.register.register_token,
  }),
  {
    setRegisterToken,
  },
)(RegisterFormContainer);
