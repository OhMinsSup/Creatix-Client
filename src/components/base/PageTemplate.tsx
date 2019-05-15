import * as React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../../containers/base/HeaderContainer';

const PageTemplateBlock = styled.div``;

interface PageTemplateProps {
  hideHeader?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const PageTemplate: React.SFC<PageTemplateProps> = ({
  hideHeader,
  style,
  className,
  children,
}) => {
  return (
    <PageTemplateBlock style={style} className={className}>
      {!hideHeader && <HeaderContainer />}
      {children}
    </PageTemplateBlock>
  );
};

export default PageTemplate;
