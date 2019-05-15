import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../../lib/styles/palette';

const IllustHeaderBlock = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  h1 {
    padding-top: 16px;
    margin-top: 0;
    font-weight: bold;
  }
  .user-info {
    display: flex;
    align-items: center;
    line-height: 20px;
    font-size: 17px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

const UserThumbnailWrapper = styled.div`
  flex: 0 0 auto;
  .thumbnail-wrapper {
    display: block;
    white-space: nowrap;
    overflow: visible;
    text-overflow: ellipsis;
    line-height: normal;
    position: relative;
    color: inherit;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
    .thumbnail {
      display: inline-block;
      vertical-align: middle;
      border-radius: 100%;
      width: 50px;
      height: 50px;
      border: none;
    }
  }
`;

const UserDataWrapper = styled.div`
  padding-left: 15px;
  flex: 1 1 auto;
  overflow: hidden;
  line-height: 20px;
  font-size: 17px;
  .username {
    line-height: 20px;
    word-break: break-word;
    font-size: 17px;
    a {
      display: inline-block;
      text-decoration: none;
      font-style: normal;
      letter-spacing: 0;
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      background-color: transparent;
      color: ${palette.gray6};
      fill: rgba(0, 0, 0, 0.84);
      transform: translateY(1.52px);
      margin-right: 0.5rem;
      position: relative;
      top: -2px;
      cursor: pointer;
    }
    .btn-wrapper {
      font-size: 17px;
      line-height: 20px;
      button {
        display: inline-block;
        vertical-align: middle;
        height: 19px;
        padding: 0 10px;
        color: ${palette.cyan4};
        font-size: 13px;
        border: 1px solid ${palette.cyan3};
        border-radius: 4px;
        transition: 0.1s background-color, 0.1s border-color, 0.1s color,
          0.1s fill;
        position: relative;
        background: rgba(0, 0, 0, 0);
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        white-space: nowrap;
        letter-spacing: 0;
        font-weight: 400;
      }
    }
  }
  .date {
    font-weight: 450;
    font-style: normal;
    letter-spacing: 0;
    font-size: 14px;
    line-height: 20px;
    transform: translateY(1.52px);
    color: rgba(0, 0, 0, 0.54);
    fill: rgba(0, 0, 0, 0.54);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

interface IllustHeaderProps {}
const IllustHeader: React.SFC<IllustHeaderProps> = () => {
  return (
    <IllustHeaderBlock>
      <h1>Vue.js 2.0 라이프사이클 이해하기</h1>
      <div className="user-info">
        <UserThumbnailWrapper>
          <Link className="thumbnail-wrapper" to="/">
            <img
              className="thumbnail"
              src="https://thumb.velog.io/resize?url=https://images.velog.io/thumbnails/veloss/43c665f0-b44c-11e8-b8f5-49cedc880031-DHxDbYmUwAASvCI.png&width=256"
            />
          </Link>
        </UserThumbnailWrapper>
        <UserDataWrapper>
          <div className="username">
            <Link to="/">@veloss</Link>
            <span className="btn-wrapper">
              <button>Follow</button>
            </span>
          </div>
          <div className="date">2019년 4월 28일</div>
        </UserDataWrapper>
      </div>
    </IllustHeaderBlock>
  );
};

export default IllustHeader;
