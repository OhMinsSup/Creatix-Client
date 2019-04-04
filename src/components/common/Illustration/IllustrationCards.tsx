import React from 'react';
import styled from 'styled-components';
import IllustrationCard from './IllustrationCard';

const IllustrationCardsBlock = styled.div`
  margin: 0 auto;
`;

interface IllustrationCardsProps {
  onOpen: () => void;
}

const IllustrationCards: React.SFC<IllustrationCardsProps> = ({ onOpen }) => {
  return (
    <IllustrationCardsBlock>
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
      <IllustrationCard onOpen={onOpen} />
    </IllustrationCardsBlock>
  );
};

export default IllustrationCards;
