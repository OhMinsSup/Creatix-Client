import React from 'react';
import styled from 'styled-components';
import IllustSequenceCard from '../../common/IllustSequenceCard';

const IllustSequencesBlock = styled.div``;

interface IllustSequencesProps {}
const IllustSequences: React.SFC<IllustSequencesProps> = () => {
  return (
    <IllustSequencesBlock>
      <IllustSequenceCard />
      <IllustSequenceCard />
      <IllustSequenceCard />
    </IllustSequencesBlock>
  );
};

export default IllustSequences;
