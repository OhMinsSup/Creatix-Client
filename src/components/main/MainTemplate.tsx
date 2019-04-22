import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../base/PageTemplate';
import TrendingWeekContainer from '../../containers/main/TrendingWeekContainer';

const MainTemplateBlock = styled(PageTemplate)`
  width: 1400px;
  max-width: 100%;
  margin: 0 auto;
  main {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const MainLeft = styled.header`
  width: 350px;
  z-index: 910;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MainRight = styled.div`
  width: 450px;
  z-index: 910;
  @media (max-width: 1230px) {
    display: none;
  }
`;

type MainTemplateNamespace = {
  MainLeft: typeof MainLeft;
  MainRight: typeof MainRight;
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
MainTemplate.MainRight = MainRight;

export default MainTemplate;
