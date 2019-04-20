import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const FeedContentBlock = styled.div`
  padding: 24px 16px;
  margin-bottom: 20px;
  .feed-head {
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    position: relative;
    span {
      font-weight: bold;
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
  }

  li + li {
    margin-top: 1rem;
  }
`;

interface FeedContentProps {
  title: string;
}
const FeedContent: React.SFC<FeedContentProps> = ({ children, title }) => {
  return (
    <FeedContentBlock>
      <div className="feed-head">
        <span>추천 {title}</span>
      </div>
      <ul className="content">{children}</ul>
    </FeedContentBlock>
  );
};

export default FeedContent;
