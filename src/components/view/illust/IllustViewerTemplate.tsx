import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../base/PageTemplate';

const IllustViewerTemplateBlock = styled(PageTemplate)`
  display: flex;
  flex-direction: column;

  .illust-viewr {
    display: block;
    margin-top: 20px;
    padding-top: 0;
    padding-bottom: 5px;
    clear: both;
    word-break: break-word;
  }

  .illust-sequences {
    padding: 1rem;
    max-width: 1032px;
    margin: 0 auto;
  }

  .illust-comments {
    margin: 0 auto;
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

interface IllustViewerTemplateProps {
  sequences: React.ReactNode;
  comments: React.ReactNode;
}
const IllustViewerTemplate: React.SFC<IllustViewerTemplateProps> = ({
  children,
  comments,
  sequences,
}) => (
  <IllustViewerTemplateBlock>
    <div className="illust-viewr">
      <IllustViewerContentWrapper>{children}</IllustViewerContentWrapper>
    </div>
    <div className="illust-sequences">{sequences}</div>
    <div className="illust-comments">{comments}</div>
  </IllustViewerTemplateBlock>
);

export default IllustViewerTemplate;
