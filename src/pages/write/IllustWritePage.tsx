import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import WriteIllustTemplate from '../../components/write/illust/WriteIllustTemplate';
import WrtieIllustContainer from '../../containers/wrtie/WrtieIllustContainer';

interface IllustWritePageProps extends RouteComponentProps {}

const IllustWritePage: React.SFC<IllustWritePageProps> = () => {
  return (
    <WriteIllustTemplate>
      <WrtieIllustContainer />
    </WriteIllustTemplate>
  );
};

export default withRouter(IllustWritePage);
