import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import AuthModalContainer from '../auth/AuthModalContainer';

interface EtcProps {}
const Etc: React.SFC<EtcProps> = () => {
  return (
    <React.Fragment>
      <AuthModalContainer />
      <ToastContainer draggable={true} position="bottom-center" />
    </React.Fragment>
  );
};

export default Etc;
