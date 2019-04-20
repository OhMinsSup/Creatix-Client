import React from 'react';
import { connect } from 'react-redux';
import qs from 'qs';
import { StoreState } from '../../store/modules';
import { setRegisterToken } from '../../store/modules/auth';
import RegisterForm, {
  RegisterFormType,
} from '../../components/register/RegisterForm';
import CodeQuery from '../../lib/graphql/querys/code/code.query';
import { CODE } from '../../lib/graphql/querys/code/code.querie';
import { Location, History } from 'history';

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

  const onSubmit = async (form: RegisterFormType) => {};
  return (
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
          <RegisterForm
            defaultEmail={email}
            error={error}
            onSubmit={onSubmit}
          />
        );
      }}
    </CodeQuery>
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
