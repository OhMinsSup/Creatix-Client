import React from 'react';
import { RouteComponentProps } from 'react-router';
import WriteIllustTemplate from '../../components/write/illust/WriteIllustTemplate';
import WrtieIllustContainer from '../../containers/wrtie/WrtieIllustContainer';

interface IllustWritePageProps extends RouteComponentProps {}

const IllustWritePage: React.SFC<IllustWritePageProps> = () => (
  <WriteIllustTemplate>
    <WrtieIllustContainer />
  </WriteIllustTemplate>
);

export default IllustWritePage;
