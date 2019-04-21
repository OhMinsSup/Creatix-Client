import React from 'react';
import qs from 'qs';
import { connect } from 'react-redux';
import { MutationFn, Mutation } from 'react-apollo';
import { toast } from 'react-toastify';
import { Location, History } from 'history';
import { StoreState } from '../../store/modules';
import { setRegisterToken, setUserData } from '../../store/modules/auth';
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
  setUserData: typeof setUserData;
  setRegisterToken: typeof setRegisterToken;
}
type RegisterFormContainerProps = StateProps & DispatchProps & OwnProps;
const RegisterFormContainer: React.SFC<RegisterFormContainerProps> = ({
  email,
  registerToken,
  setUserData,
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
    setError(null);
    // validate
    const validation = {
      displayName: (text: string) => {
        if (text === '') {
          return '이름을 입력해주세요.';
        }
        if (text.length > 45) {
          return '이름은 최대 45자까지 입력 할 수 있습니다.';
        }
      },
      username: (text: string) => {
        if (!/^[a-z0-9-_]{3,16}$/.test(text)) {
          return '아이디는 3~16자의 알파벳,숫자,혹은 - _ 으로 이루어져야 합니다.';
        }
      },
      shortBio: (text: string) => {
        if (text.length > 140) {
          return `한 줄 소개는 140자 미만으로 입력해주세요. (현재 ${
            text.length
          }자)`;
        }
      },
    };

    const error =
      validation.displayName(form.displayName) ||
      validation.username(form.username) ||
      validation.shortBio(form.shortBio) ||
      null;

    if (error) {
      setError(error);
      return;
    }

    localRegisterFn({
      variables: {
        register_token: registerToken || '',
        display_name: form.displayName,
        username: form.username,
        short_bio: form.shortBio || 'creatix에 오신것을 환영합니다.',
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
                    const user = Object.assign(
                      {},
                      {
                        id,
                        email,
                        username,
                        display_name,
                        thumbnail,
                      },
                    );
                    logUserIn({
                      variables: {
                        token: {
                          accessToken: access_token,
                          refreshToken: refresh_token,
                        },
                        user,
                      },
                    });
                    setUserData({ user });
                    history.push('/');
                  } else if (!LocalRegister.ok && LocalRegister.payload) {
                    setError(LocalRegister.payload);
                  } else if (!LocalRegister.ok && LocalRegister.error) {
                    toast.error(LocalRegister.error);
                  }
                }}
              >
                {localRegister => {
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
    setUserData,
    setRegisterToken,
  },
)(RegisterFormContainer);
