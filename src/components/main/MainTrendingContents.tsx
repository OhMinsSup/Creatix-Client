import React from 'react';
import styled from 'styled-components';

const MainTrendingContentsBlock = styled.div`
  margin-bottom: 2rem;
  h3 {
    font-size: 0.75rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    font-weight: 600;
    margin-left: 1rem;
  }
  > .wrapper {
    overflow-x: scroll;
    overflow-y: hidden;
    .contents {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
`;

interface MainTrendingContentsProps {}
const MainTrendingContents: React.SFC<MainTrendingContentsProps> = ({
  children,
}) => {
  return (
    <MainTrendingContentsBlock>
      <h3>이주의 인기 일러스트</h3>
      <div className="wrapper">
        <div className="contents">{children}</div>
      </div>
    </MainTrendingContentsBlock>
  );
};

export default MainTrendingContents;
