import React from 'react';
import styled from 'styled-components';
import IllustrationList from '../../containers/list/IllustrationList';

const IllustrationPageBlock = styled.div`
  display: flex;
  width: 100%;
  z-index: 904;
  flex-grow: 1;
  position: relative;
`;

interface IllustrationPageProps {}

const IllustrationPage: React.SFC<IllustrationPageProps> = () => {
  return (
    <IllustrationPageBlock>
      <IllustrationList />
    </IllustrationPageBlock>
  );
};

export default IllustrationPage;