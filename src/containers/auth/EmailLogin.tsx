import React from 'react';
import { Mutation } from 'react-apollo';
import qs from 'qs';
import LoginPage from '../../components/auth/LoginPage';
import CodeQuery from '../../lib/graphql/querys/code/code.query';
import { CODE } from '../../lib/graphql/querys/code/code.querie';
import { toast } from 'react-toastify';
import { LOG_USER_IN } from '../../lib/graphql/shared/shared.querie';
import { connect } from 'react-redux';
import { setRegisterToken } from '../../store/modules/auth';
import { StoreState } from '../../store/modules';
import { History, Location } from 'history';

const { useState, useEffect } = React;

interface OwnProps {
  location: Location;
  history: History;
}
interface StateProps {}
interface DispatchProps {
  setRegisterToken: typeof setRegisterToken;
}
type EmailLoginProps = StateProps & DispatchProps & OwnProps;
const EmailLogin: React.SFC<EmailLoginProps> = props => {
  const [code, setCode] = useState('');
  const onSetRegister = (email: string, token: string) => {
    const { setRegisterToken } = props;
    setRegisterToken({ email, register_token: token });
  };

  useEffect(() => {
    const query = qs.parse(props.location.search, {
      ignoreQueryPrefix: true,
    });
    if (!query.code) {
      // TODO 404
      props.history.replace('/');
    }
    setCode(query.code);
  }, []);
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
            if (Code.ok && !!Code.loginResult) {
              const {
                loginResult: {
                  access_token,
                  refresh_token,
                  id,
                  email,
                  username,
                  display_name,
                  thumbnail,
                },
              } = Code;
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
              props.history.push('/');
            } else if (Code.ok && !!Code.registerResult) {
              const {
                registerResult: { email, register_token },
              } = Code;
              onSetRegister(email, register_token);
            } else if (!Code.ok && Code.error) {
              toast.error(Code.error);
            }
          }}
        >
          {({ loading }) => (
            <LoginPage loading={loading} text="연결하는 중...." />
          )}
        </CodeQuery>
      )}
    </Mutation>
  );
};

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  () => ({}),
  {
    setRegisterToken,
  },
)(EmailLogin);
