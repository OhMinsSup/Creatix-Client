import React from 'react';
import styled, { css } from 'styled-components';
import transitions from '../../lib/styles/transitions';

const SubmitModalBlock = styled.div<{ visible: boolean }>`
  display: flex;
  position: fixed;
  overflow: auto;
  text-align: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  z-index: 950;
  background-color: rgba(228, 226, 226, 0.49);
  > .wrapper {
    margin: auto;
    outline: 0;
    overflow: hidden;
    padding: 100px 5px;
    ${props =>
      props.visible
        ? css`
            animation: ${transitions.popInFromBottom} 0.4s forwards ease-in-out;
          `
        : css`
            animation: ${transitions.popOutToBottom} 0.2s forwards ease-in-out;
          `}
    .content {
      color: rgba(0, 0, 0, 0.68);
      line-height: 1.4;
      margin-bottom: 30px;
      .write-dialog {
        display: flex;
      }
    }
  }
`;

interface SubmitModalProps {}
const SubmitModal: React.SFC<SubmitModalProps> = () => {
  return (
    <SubmitModalBlock visible={true}>
      <div className="wrapper">
        <div className="content">
          <div className="write-dialog">하핳</div>
        </div>
      </div>
    </SubmitModalBlock>
  );
};

export default SubmitModal;
