import React from 'react';
import { RouteComponentProps } from 'react-router';
import IllustViewerTemplate from '../../components/view/illust/IllustViewerTemplate';
import IllustViewer from '../../containers/view/IllustViewer';
import IllustSequencesContainer from '../../containers/view/IllustSequencesContainer';
import IllustCommentContainer from '../../containers/view/IllustCommentContainer';

interface IllustViewerPageProps extends RouteComponentProps {}
const IllustViewerPage: React.SFC<IllustViewerPageProps> = () => {
  return (
    <IllustViewerTemplate
      sequences={<IllustSequencesContainer />}
      comments={<IllustCommentContainer />}
    >
      <IllustViewer />
    </IllustViewerTemplate>
  );
};

export default IllustViewerPage;
