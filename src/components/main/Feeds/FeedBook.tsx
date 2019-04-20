import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../../lib/styles/palette';

const FeedBookBlock = styled.li<{ url: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .thumbnail-wrapper {
    width: 135px;
    height: 135px;
    border: 1px solid ${palette.gray1};
    flex: 1;
    border-radius: 5px;
    .thumbnail {
      width: 100%;
      height: 100%;
      background-color: #f5f5f5;
      background-size: cover;
      background-position: center center;
      border-radius: 4px;
      margin-bottom: 0.5rem;
      position: relative;
      font-size: 1rem;
      display: block;
      overflow-wrap: break-word;
      text-decoration: none;
      background-image: ${props => `url(${props.url})`};
    }
  }
  .meta {
    flex: 1;
    padding: 0.5rem;
    a {
      color: ${palette.gray7};
      text-decoration: none;
      h3 {
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
      }
    }
    .user {
      text-decoration: none;
      .username {
        color: ${palette.gray6};
        font-weight: bold;
        font-size: 1rem;
        margin: 0 8px 0 0;
        text-decoration: none;
      }
    }
  }
`;

interface FeedBookProps {
  url: string;
  title: string;
}
const FeedBook: React.SFC<FeedBookProps> = ({ url, title }) => {
  return (
    <FeedBookBlock url={url}>
      <div className="thumbnail-wrapper">
        <Link className="thumbnail" to="/" />
      </div>
      <div className="meta">
        <Link to="/">
          <h3>{title}</h3>
        </Link>
        <Link to="/" className="user">
          <div className="username">veloss</div>
        </Link>
      </div>
    </FeedBookBlock>
  );
};

export default FeedBook;
