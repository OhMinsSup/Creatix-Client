import React from 'react';
import styled, { css } from 'styled-components';
import { MdClose } from 'react-icons/md';
import transitions from '../../lib/styles/transitions';

const AuthModalBlock = styled.div<{ visible: boolean }>`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
  background-color: rgba(228, 226, 226, 0.49);
  > .wrapper {
    width: 600px;
    height: 480px;
    max-width: none;
    padding: 0;
    margin: auto;
    outline: 0;
    overflow: hidden;
    transform-origin: bottom center;
    ${props =>
      props.visible
        ? css`
            animation: ${transitions.popInFromBottom} 0.4s forwards ease-in-out;
          `
        : css`
            animation: ${transitions.popOutToBottom} 0.2s forwards ease-in-out;
          `}

    .white-block {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      position: relative;
      background: #ffffff;
      background-repeat: no-repeat;
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
      text-align: center !important;
      line-height: 20px;
      font-size: 16px;
      background-image: url(https://cdn-images-1.medium.com/max/900/1*gnUBeL-INIVDk0_GyL8x1g.png);
      background-size: 100%;
      .exit-wrapper {
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
        outline: none;
        line-height: 1;
        padding: 15px;
        color: rgba(0, 0, 0, 0.54);
        font-size: 23px;
        svg {
          cursor: pointer;
        }
      }
    }
  }
`;

export interface AuthModalProps {
  visible: boolean;
  onAuthModalClose: () => void;
}
const AuthModal: React.SFC<AuthModalProps> = ({
  children,
  visible,
  onAuthModalClose,
}) => {
  const [closed, setClosed] = React.useState(true);
  React.useEffect(() => {
    let timeoutId: number | null = null;
    if (visible) {
      setClosed(false);
    } else {
      timeoutId = setTimeout(() => {
        setClosed(true);
      }, 200);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [visible]);

  if (!visible && closed) return null;
  return (
    <AuthModalBlock visible={visible}>
      <div className="wrapper">
        <div className="white-block">
          <div className="exit-wrapper">
            <MdClose onClick={onAuthModalClose} tabIndex={1} />
          </div>
          <div className="block-content">{children}</div>
        </div>
      </div>
    </AuthModalBlock>
  );
};

export default AuthModal;
