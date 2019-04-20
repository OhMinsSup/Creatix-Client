import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHeart, FaCommentAlt } from 'react-icons/fa';
import palette from '../../../lib/styles/palette';

const FeedIllustBlock = styled.li<{ url: string }>`
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
    margin-left: 0.5rem;
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
    margin: 0.25rem 0.5rem;
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .tag {
      margin-left: 0.5rem;
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
`;

interface FeedIllustProps {
  title: string;
  comments: number;
  likes: number;
  url: string;
  tags: string[];
}
const FeedIllust: React.SFC<FeedIllustProps> = ({
  title,
  url,
  tags,
  comments,
  likes,
}) => {
  return (
    <FeedIllustBlock url={url}>
      <Link to="/" className="thumbnail" />
      <Link to="/" className="title">
        {title}
      </Link>
      <Link to="/" className="meta-data">
        <span className="item-wrapper">
          <FaHeart style={{ color: '#fa5252' }} />
          <span>{likes}</span>
        </span>
        <span className="item-wrapper">
          <FaCommentAlt style={{ color: '#fab005' }} />
          <span>{comments}</span>
        </span>
      </Link>
      <div className="tags">
        {tags.map((t, i) => (
          <div key={i} className="tag">
            <Link to="/">{t}</Link>
          </div>
        ))}
      </div>
    </FeedIllustBlock>
  );
};

export default FeedIllust;
