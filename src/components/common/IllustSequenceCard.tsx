import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaRegBookmark as BookmarkIcon } from 'react-icons/fa';
import palette from '../../lib/styles/palette';

const IllustSequenceCardBlock = styled.div`
  float: left;
  padding: 8px;
  position: relative;
  width: 100%;
  @media (min-width: 768px) {
    width: 30%;
  }

  > .wrapper {
    line-height: 20px;
    font-size: 16px;
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.04);
    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.785);
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100px;
      padding: 15px;
      .title-wrapper {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        .title {
          overflow: hidden;
          max-height: 48px;
          text-overflow: ellipsis;
          font-weight: 600;
          transform: translateY(-1.88px);
          letter-spacing: -0.29px;
          font-size: 21px;
          line-height: 24px;
          font-style: normal;
          color: ${palette.gray8};
        }
      }

      .subinfo {
        font-size: 0.875rem;
        padding-left: 5px;
        padding-right: 5px;
        color: #8aa6c1;
        span + span::before {
          color: $oc-gray-5;
          padding-left: 0.25rem;
          padding-right: 0.25rem;
          content: '\00B7';
        }
      }
    }
  }
`;

interface IllustSequenceCardProps {}
const IllustSequenceCard: React.SFC<IllustSequenceCardProps> = () => {
  return (
    <IllustSequenceCardBlock>
      <div className="wrapper">
        <Link to="/">
          <img src="http://webimage.10x10.co.kr/play2016/2017/20/20171018192333_0h334.jpg" />
        </Link>
        <div className="content">
          <Link to="/" className="title-wrapper">
            <h3 className="title">제목입니다</h3>
          </Link>
          <div className="subinfo">
            <span>2019년 5월 6일</span>
            <span>5 개의 댓글</span>
            <span>5 개의 좋아요</span>
          </div>
        </div>
      </div>
    </IllustSequenceCardBlock>
  );
};

export default IllustSequenceCard;
