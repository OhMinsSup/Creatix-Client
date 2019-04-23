import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../base/PageTemplate';

const WriteBooksTemplateBlock = styled(PageTemplate)``;

interface WriteBooksTemplateProps {}
const WriteBooksTemplate: React.SFC<WriteBooksTemplateProps> = ({
  children,
}) => {
  return <WriteBooksTemplateBlock>{children}</WriteBooksTemplateBlock>;
};

export default WriteBooksTemplate;
