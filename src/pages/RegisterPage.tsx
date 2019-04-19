import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import RegisterFormContainer from '../containers/register/RegisterFormContainer';
import RegisterTemplate from '../components/register/RegisterTemplate';

interface RegisterPageProps extends RouteComponentProps {}
const RegisterPage: React.SFC<RegisterPageProps> = () => {
  return (
    <RegisterTemplate>
      <RegisterFormContainer />
    </RegisterTemplate>
  );
};

export default withRouter(RegisterPage);
