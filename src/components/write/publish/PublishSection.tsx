import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const PublishSectionBlock = styled.section`
  & > h3 {
    font-size: 1.3rem;
    color: ${palette.gray8};
    line-height: 1.5;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }
  .contents {
  }
  & + & {
    margin-top: 1.5rem;
  }
`;

interface PublishSectionProps {
  title: string;
}
const PublishSection: React.SFC<PublishSectionProps> = ({
  title,
  children,
  ...rest
}) => {
  const htmlProps = rest as any;
  return (
    <PublishSectionBlock {...htmlProps}>
      <h3>{title}</h3>
      <div className="contents">{children}</div>
    </PublishSectionBlock>
  );
};

export default PublishSection;
