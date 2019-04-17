import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import AuthModalContainer from '../auth/AuthModalContainer';
import { withRouter, RouteComponentProps } from 'react-router';

interface EtcProps extends RouteComponentProps {}
const Etc: React.SFC<EtcProps> = () => {
  return (
    <React.Fragment>
      <AuthModalContainer />
      <ToastContainer draggable={true} position="bottom-center" />
    </React.Fragment>
  );
};

export default withRouter(Etc);
