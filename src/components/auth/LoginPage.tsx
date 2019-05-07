import React from 'react';
import styled from 'styled-components';
import Spinner from '../common/Spinner';

const LoginPageBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(17, 17, 17, 0.836);
  z-index: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  > .wrapper {
    .text {
      font-size: 2rem;
      text-align: center;
    }
    p {
      color: $oc-gray-4;
      text-align: center;
      font-size: 1rem;
    }
  }
`;

export interface LoginPageProps {
  text: string;
  loading: boolean;
}
const LoginPage: React.SFC<LoginPageProps> = ({ text, loading }) => (
  <LoginPageBlock>
    <div className="wrapper">
      <Spinner size="11rem" />
      <div className="text">{text}</div>
      {loading ? <p>개발자가 열심히 일하는중.....</p> : <p>완료!</p>}
    </div>
  </LoginPageBlock>
);

export default LoginPage;
