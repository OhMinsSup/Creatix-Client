import * as React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const PublishScreenTemplateBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 990;
`;

const Wrapper = styled.div`
  width: 768px;
  display: flex;
`;
const Pane = styled.div`
  flex: 1;
  min-width: 0;
`;
const RightPane = styled(Pane)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Separator = styled.div`
  width: 1px;
  min-height: 425px;
  background: ${palette.gray2};
  margin-left: 2rem;
  margin-right: 2rem;
`;

export interface PublishScreenTemplateProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const PublishScreenTemplate: React.SFC<PublishScreenTemplateProps> = ({
  left,
  right,
}) => {
  return (
    <PublishScreenTemplateBlock>
      <Wrapper>
        <Pane>{left}</Pane>
        <Separator />
        <RightPane>{right}</RightPane>
      </Wrapper>
    </PublishScreenTemplateBlock>
  );
};

export default PublishScreenTemplate;
