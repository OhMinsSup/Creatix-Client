import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../base/PageTemplate';

const IllustViewerTemplateBlock = styled(PageTemplate)`
  .illust-viewr {
    display: block;
    margin-top: 20px;
    padding-top: 0;
    padding-bottom: 5px;
    clear: both;
    word-break: break-word;
  }
`;

const IllustViewerContentWrapper = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  color: rgba(0, 0, 0, 0.84);
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
`;

interface IllustViewerTemplateProps {}
const IllustViewerTemplate: React.SFC<IllustViewerTemplateProps> = ({
  children,
}) => (
  <IllustViewerTemplateBlock>
    <div className="illust-viewr">
      <IllustViewerContentWrapper>{children}</IllustViewerContentWrapper>
    </div>
  </IllustViewerTemplateBlock>
);

export default IllustViewerTemplate;
