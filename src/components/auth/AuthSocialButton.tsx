import * as React from 'react';
import styled, { css } from 'styled-components';
import {
  FaFacebookF as FacebookIcon,
  FaGoogle as GoogleIcon,
  FaGithub as GithubIcon,
} from 'react-icons/fa';
import palette from '../../lib/styles/palette';

const AuthSocialButtonBlock = styled.button<{ border: boolean }>`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.125s all ease-in;
  ${props =>
    props.border &&
    css`
      border: 1px solid ${palette.gray3};
    `}
  &:focus {
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.35);
  }
`;

export interface AuthSocialButtonProps {
  provider: 'facebook' | 'google' | 'github';
  tabIndex?: number;
}

const providerMap = {
  github: {
    color: '#272e33',
    icon: GithubIcon,
    border: false,
  },
  google: {
    color: '#f03e3e',
    icon: GoogleIcon,
    border: true,
  },
  facebook: {
    color: '#3b5998',
    icon: FacebookIcon,
    border: false,
  },
};

const AuthSocialButton: React.SFC<AuthSocialButtonProps> = ({
  provider,
  tabIndex,
}) => {
  const info = providerMap[provider];
  const { icon: Icon, color, border } = info;
  return (
    <AuthSocialButtonBlock
      style={{
        background: color,
      }}
      border={border}
      tabIndex={tabIndex}
    >
      <Icon />
    </AuthSocialButtonBlock>
  );
};

export default AuthSocialButton;
