import React from 'react';
import styled from 'styled-components';
import IllustrationMeta from './IllustrationMeta';
import IllustrationImages from './IllustrationImages';
import { Link } from 'react-router-dom';
import palette from '../../../lib/styles/palette';
import IllustrationFooter from './IllustrationFooter';

const IllustrationCardBlock = styled.div`
  display: block;
  width: 768px;
  padding: 1rem 1.8rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  background: #fff;
  transition: background 0.3s ease-in-out;
  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    .contents {
      width: 100%;
      margin-right: 0;
      .description {
        margin-top: 0.5rem;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
        text-decoration: none;
        p {
          margin-bottom: 1rem;
          color: ${palette.gray8};
        }
      }
    }
  }
`;

interface IllustrationCardProps {
  onOpen: () => void;
}

const IllustrationCard: React.SFC<IllustrationCardProps> = ({ onOpen }) => {
  return (
    <IllustrationCardBlock>
      <div className="wrapper">
        <div className="contents">
          <IllustrationMeta />
          <IllustrationImages onOpen={onOpen} />
          <Link to="/" className="description">
            <p>
              Hi all, thanks for being a part of our healthy community of
              software developers.
            </p>
          </Link>
          <IllustrationFooter />
        </div>
      </div>
    </IllustrationCardBlock>
  );
};

export default IllustrationCard;
