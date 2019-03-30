import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../../lib/styles/palette';

const src =
  'https://thumb.velog.io/resize?url=https://images.velog.io/profiles/velopert/thumbnails/1536400727.98.png&width=128';

const IllustrationMetaBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    .thumbnail {
      display: block;
      overflow: hidden;
      border-radius: 100%;
      margin-right: 0.5rem;
      width: 40px;
      height: 40px;
      color: #4d4d4d;
      font-weight: 600;
      background: ${palette.gray1};
      font-size: 1rem;
      img {
        width: 100%;
        display: block;
        border-style: none;
      }
    }
  }
`;

const IllustrationUserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .info {
    display: flex;
    flex-direction: column;
    .username {
      color: #4d4d4d;
      font-weight: bold;
      font-size: 1rem;
      margin: 0 8px 0 0;
      text-decoration: none;
    }
    .subinfo {
      display: flex;
      flex-direction: row;
      align-items: center;
      .email {
        color: ${palette.gray6};
        font-size: 1rem;
        font-weight: 400;
        margin: 0 8px 0 0;
        text-decoration: none;
      }
      .date-time {
        color: ${palette.gray6};
        font-size: 1rem;
        margin: 0 8px 0 0;
        .middot {
          font-size: 1rem;
          margin: 0 8px 0 0;
          display: inline-block;
          color: #999;
        }
        .date {
          color: #999;
          font-size: 0.875rem;
          font-weight: 400;
          margin: 0 8px 0 0;
          text-decoration: none;
        }
      }
    }
  }
`;

interface IllustrationMetaProps {}

const IllustrationMeta: React.SFC<IllustrationMetaProps> = () => {
  return (
    <IllustrationMetaBlock>
      <div className="wrapper">
        <Link to="/" className="thumbnail">
          <img src={src} />
        </Link>
        <IllustrationUserInfo>
          <div className="info">
            <Link to="/" className="username">
              veloss
            </Link>
            <div className="subinfo">
              <Link className="email" to="/">
                (@public.veloss@naver.com)
              </Link>
              <p className="date-time">
                <span className="middot">·</span>
                <Link className="date" to="/">
                  3월 30일
                </Link>
              </p>
            </div>
          </div>
        </IllustrationUserInfo>
      </div>
    </IllustrationMetaBlock>
  );
};

export default IllustrationMeta;
