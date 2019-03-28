import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import PageTemplate from '../base/PageTemplate';

const MainTemplateBlock = styled(PageTemplate)`
  width: 1400px;
  padding: 0 15px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainTemplate: React.SFC = ({ children }) => {
  return (
    <MainTemplateBlock>
      <main>{children}</main>
    </MainTemplateBlock>
  );
};

export default MainTemplate;
