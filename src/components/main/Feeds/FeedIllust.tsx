import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHeart, FaCommentAlt } from 'react-icons/fa';
import palette from '../../../lib/styles/palette';

const url =
  'https://hashnode.imgix.net/res/hashnode/image/upload/v1554986443698/4FquSejQo.png?w=800&h=420&fit=crop&crop=entropy&auto=format,enhance&q=60';

const FeedIllustBlock = styled.div<{ url: string }>`
  padding: 24px 16px;
  margin-bottom: 20px;
  .feed-head {
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    position: relative;
    span {
      font-weight: 500;
      font-size: 0.875rem;
      color: ${palette.gray7};
      cursor: pointer;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding-left: 0;
    margin: 0;
    li {
      margin-bottom: 1.5rem;
      .thumbnail {
        width: 100%;
        height: 147px;
        background-color: #f5f5f5;
        background-size: cover;
        background-position: center center;
        border-radius: 4px;
        margin-bottom: 0.5rem;
        position: relative;
        font-weight: 500;
        font-size: 1rem;
        display: block;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
        text-decoration: none;
        background-image: ${props => `url(${props.url})`};
      }
      .title {
        color: #000;
        margin-bottom: 0.25rem;
        font-weight: 500;
        font-size: 1rem;
        display: block;
        overflow-wrap: break-word;
        word-wrap: break-word;
        text-decoration: none;
        word-break: break-word;
      }
      .meta-data {
        color: #4d4d4d;
        font-weight: 600;
        margin: 0.5rem 0;
        font-size: 0.875rem;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
        text-decoration: none;
        align-items: center;
        display: flex;
        flex-direction: row;
        .item-wrapper {
          display: flex;
          align-items: center;
          margin-right: 1rem;
          color: #4d4d4d;
          svg {
            display: block;
            height: 18px;
            margin-right: 0.35rem;
            overflow: hidden;
          }
        }
      }
      .tags {
        margin-top: 0.5rem;
        a {
          text-decoration: none;
          display: inline-flex;
          background: ${palette.gray0};
          border: 1px solid ${palette.gray3};
          color: ${palette.gray7};
          padding: 0.5rem;
          font-size: 0.75rem;
          font-weight: 500;
          line-height: 0.75rem;
          border-radius: 4px;
          &:hover {
            cursor: pointer;
            background: ${palette.gray1};
          }
        }
      }
    }
  }
`;

interface FeedIllustProps {}
const FeedIllust: React.SFC<FeedIllustProps> = () => {
  return (
    <FeedIllustBlock url={url}>
      <div className="feed-head">
        <span>추천 포스트</span>
      </div>
      <ul className="content">
        <li>
          <Link to="/" className="thumbnail" />
          <Link to="/" className="title">
            제목
          </Link>
          <Link to="/" className="meta-data">
            <span className="item-wrapper">
              <FaHeart style={{ color: '#fa5252' }} />
              <span>5</span>
            </span>
            <span className="item-wrapper">
              <FaCommentAlt style={{ color: '#fab005' }} />
              <span>10</span>
            </span>
          </Link>
          <div className="tags">
            <Link to="/">태그</Link>
          </div>
        </li>
      </ul>
    </FeedIllustBlock>
  );
};

export default FeedIllust;
