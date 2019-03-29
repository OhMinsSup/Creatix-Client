import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import PageTemplate from '../base/PageTemplate';

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
  width: 320px;
  z-index: 910;
`;

type MainTemplateNamespace = {
  MainLeft: typeof MainLeft;
};

interface MainTemplateProps {}

const MainTemplate: React.SFC<MainTemplateProps> & MainTemplateNamespace = ({
  children,
}) => {
  return (
    <MainTemplateBlock>
      <main>{children}</main>
    </MainTemplateBlock>
  );
};

MainTemplate.MainLeft = MainLeft;

export default MainTemplate;
