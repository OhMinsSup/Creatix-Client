import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../base/PageTemplate';

const WriteIllustTemplateBlock = styled(PageTemplate)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;
  padding-bottom: 28px;
  height: 100%;
  transform-origin: center top;
  transition: transform 250ms cubic-bezier(0.66, 0.025, 0.33, 0.975) 0s,
    height 250ms cubic-bezier(0.66, 0.025, 0.33, 0.975) 0s;
`;

interface WriteIllustTemplateProps {}
const WriteIllustTemplate: React.SFC<WriteIllustTemplateProps> = ({
  children,
}) => {
  return <WriteIllustTemplateBlock>{children}</WriteIllustTemplateBlock>;
};

export default WriteIllustTemplate;
