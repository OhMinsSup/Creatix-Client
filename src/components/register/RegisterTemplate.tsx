import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const RegisterTemplateBlock = styled.div`
  width: 768px;
  margin: 0 auto;
  margin-top: 100px;
  line-height: 1.5;
  h1 {
    font-size: 4rem;
    font-weight: bolder;
    margin: 0;
    text-align: center;
    a {
      text-decoration: none;
      color: ${palette.gray8};
    }
  }
  .description {
    font-size: 1.5rem;
    color: ${palette.gray9};
    text-align: center;
  }
`;

export interface RegisterTemplateProps {}
const RegisterTemplate: React.SFC<RegisterTemplateProps> = ({ children }) => {
  return (
    <RegisterTemplateBlock>
      <h1>
        <Link to="/">Creatix</Link>
      </h1>
      <div className="description">기본 회원 정보를 등록해주세요.</div>
      <div className="contents">{children}</div>
    </RegisterTemplateBlock>
  );
};

export default RegisterTemplate;
