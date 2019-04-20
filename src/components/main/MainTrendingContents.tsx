import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const MainTrendingContentsBlock = styled.div`
  margin-bottom: 2rem;
  .head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h3 {
      font-size: 0.75rem;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
      font-weight: 600;
      margin-left: 1rem;
    }
    select {
      margin: 0.7rem;
      position: relative;
      right: 0.7rem;
      background: #fff;
      display: inline-block;
      outline: 0;
      cursor: pointer;
      padding: 0.25rem 0.25rem 0.25rem 0.25rem;
      color: rgba(0, 0, 0, 0.87);
      border: 1px solid rgba(34, 36, 38, 0.15);
      border-radius: 0.28571429rem;
    }
  }
  > .wrapper {
    overflow-x: scroll;
    overflow-y: hidden;
    ::-webkit-scrollbar {
      height: 6px;
      width: 50px;
      border-radius: 100px;
      background: transparent;
      &:hover {
        background: ${palette.gray3};
      }
    }
    .contents {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
`;

interface MainTrendingContentsProps {
  title: string;
  listing: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const MainTrendingContents: React.SFC<MainTrendingContentsProps> = ({
  title,
  children,
  listing,
  onChange,
}) => {
  return (
    <MainTrendingContentsBlock>
      <div className="head">
        <h3>이주의 인기 {title}</h3>
        <select value={listing} onChange={onChange}>
          <option value="ILLUST">일러스트</option>
          <option value="BOOKS">소설</option>
        </select>
      </div>
      <div className="wrapper">
        <div className="contents">{children}</div>
      </div>
    </MainTrendingContentsBlock>
  );
};

export default MainTrendingContents;
