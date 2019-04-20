import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import PageTemplate from '../base/PageTemplate';
import TrendingWeekContainer from '../../containers/main/TrendingWeekContainer';

const MainTemplateBlock = styled(PageTemplate)`
  width: 1400px;
  padding: 0 15px;
  max-width: 100%;
  margin: 0 auto;
  main {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const MainLeft = styled.header`
  width: 300px;
  z-index: 910;
`;
const Right = styled.div`
  width: 480px;
  z-index: 910;
`;

type MainTemplateNamespace = {
  MainLeft: typeof MainLeft;
  Right: typeof Right;
};

interface MainTemplateProps {}

const MainTemplate: React.SFC<MainTemplateProps> & MainTemplateNamespace = ({
  children,
}) => {
  return (
    <MainTemplateBlock>
      <TrendingWeekContainer />
      <main>{children}</main>
    </MainTemplateBlock>
  );
};

MainTemplate.MainLeft = MainLeft;
MainTemplate.Right = Right;

export default MainTemplate;
