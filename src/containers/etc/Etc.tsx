import React from 'react';
import { ToastContainer } from 'react-toastify';
import AuthModalContainer from '../auth/AuthModalContainer';
import { withRouter, RouteComponentProps } from 'react-router';

const isBrowser = process.env.APP_ENV === 'browser';
if (isBrowser) {
  require('react-toastify/dist/ReactToastify.min.css');
}

interface EtcProps extends RouteComponentProps {}
const Etc: React.SFC<EtcProps> = () => (
  <React.Fragment>
    <AuthModalContainer />
    <ToastContainer draggable={true} position="bottom-center" />
  </React.Fragment>
);

export default withRouter(Etc);
