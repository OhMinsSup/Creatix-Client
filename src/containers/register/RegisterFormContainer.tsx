import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../store/modules';
import RegisterForm, {
  RegisterFormType,
} from '../../components/register/RegisterForm';

const { useEffect, useState } = React;

interface OwnProps {}
interface StateProps {
  email: string | null;
  registerToken: string | null;
}
interface DispatchProps {}
type RegisterFormContainerProps = StateProps & DispatchProps & OwnProps;
const RegisterFormContainer: React.SFC<RegisterFormContainerProps> = ({
  email,
  registerToken,
}) => {
  const [error, setError] = useState<null | string>(null);
  const onSubmit = async (form: RegisterFormType) => {};
  return (
    <RegisterForm defaultEmail={email} error={error} onSubmit={onSubmit} />
  );
};

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  ({ auth }) => ({
    email: auth.register && auth.register.email,
    registerToken: auth.register && auth.register.register_token,
  }),
  {},
)(RegisterFormContainer);
