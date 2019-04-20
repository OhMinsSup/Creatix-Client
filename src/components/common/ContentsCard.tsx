import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContentsCardBlock = styled.div<{ url: string }>`
  width: calc(100% * 1 / 5 - 1.2rem);
  margin: 0 0.5rem;
  border-radius: 4px;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid #cfd6db;
  @media (max-width: 1024px) {
    width: calc(100% * 1 / 3.5 - 1rem);
  }
  @media (max-width: 768px) {
    width: calc(100% * 1 / 2.5 - 1rem);
  }
  @media (max-width: 425px) {
    width: calc(100% * 1 / 1.5 - 1rem);
  }
  a {
    width: 100%;
    height: 125px;
    background-size: cover;
    background-position: center;
    background-color: #f6f6f6;
    display: block;
    text-decoration: none;
    color: #2962ff;
    background-image: ${props => `url(${props.url || ''})`};
  }
  .meta {
    padding: 1rem;
    h1 {
      font-size: 1.1rem;
      font-weight: 600;
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    }
  }
`;

interface ContentsCardProps {
  url: string;
  title: string;
}
const ContentsCard: React.SFC<ContentsCardProps> = ({ url, title }) => {
  return (
    <ContentsCardBlock url={url}>
      <Link to="/" />
      <div className="meta">
        <h1>{title}</h1>
      </div>
    </ContentsCardBlock>
  );
};

export default ContentsCard;
