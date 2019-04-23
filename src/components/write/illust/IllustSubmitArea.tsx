import React from 'react';
import styled from 'styled-components';
import { FaAngleLeft as LeftIcon } from 'react-icons/fa';
import palette from '../../../lib/styles/palette';
import { Link } from 'react-router-dom';

const IllustSubmitAreaBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .back-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 40px;
    color: ${palette.gray7};
    border: none;
    cursor: pointer;
    background: transparent;
    outline: none;
    > .wrapper {
      padding: 4px;
      .back-icon {
        fill: currentColor;
        stroke-width: 0;
        vertical-align: middle;
        height: 30px;
        width: 30px;
        overflow: hidden;
      }
    }
  }
  .write-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 40px;
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
    > .wrapper {
      cursor: pointer;
      background: ${palette.cyan3};
      border-radius: 8px;
      outline: 0;
      padding: 8px 10px;
      &:hover {
        background: ${palette.cyan2};
      }
      .write {
        color: white;
        font-size: 16px;
        word-wrap: break-word;
        font-weight: 700;
        letter-spacing: -0.04px;
      }
    }
  }
`;

interface IllustSubmitAreaProps {}
const IllustSubmitArea: React.SFC<IllustSubmitAreaProps> = () => {
  return (
    <IllustSubmitAreaBlock>
      <Link to="/" className="back-btn">
        <div className="wrapper">
          <LeftIcon className="back-icon" />
        </div>
      </Link>
      <button className="write-btn">
        <div className="wrapper">
          <div className="write">작성하기</div>
        </div>
      </button>
    </IllustSubmitAreaBlock>
  );
};

export default IllustSubmitArea;
