import React from 'react';
import styled from 'styled-components';
import IllustrationCard from './IllustrationCard';

const IllustrationCardsBlock = styled.div`
  margin: 0 auto;
`;

interface IllustrationCardsProps {}

const IllustrationCards: React.SFC<IllustrationCardsProps> = () => {
  return (
    <IllustrationCardsBlock>
      <IllustrationCard />
      <IllustrationCard />
      <IllustrationCard />
      <IllustrationCard />
      <IllustrationCard />
      <IllustrationCard />
    </IllustrationCardsBlock>
  );
};

export default IllustrationCards;
