import React from 'react';
import { RouteComponentProps } from 'react-router';
import EmailLogin from '../containers/auth/EmailLogin';

interface EmailLoginPageProps extends RouteComponentProps {}
const EmailLoginPage: React.SFC<EmailLoginPageProps> = ({
  location,
  history,
}) => <EmailLogin history={history} location={location} />;

export default EmailLoginPage;
