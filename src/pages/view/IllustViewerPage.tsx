import React from 'react';
import { RouteComponentProps } from 'react-router';
import IllustViewerTemplate from '../../components/view/illust/IllustViewerTemplate';
import IllustViewer from '../../containers/view/IllustViewer';

interface IllustViewerPageProps extends RouteComponentProps {}
const IllustViewerPage: React.SFC<IllustViewerPageProps> = () => {
  return (
    <IllustViewerTemplate>
      <IllustViewer />
    </IllustViewerTemplate>
  );
};

export default IllustViewerPage;
