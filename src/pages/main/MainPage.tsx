import React from 'react';
import MainTemplate from '../../components/main/MainTemplate';
import MainSideMenu from '../../components/main/MainSideMenu';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const IllustrationPage = loadable(() => import('./IllustrationPage'));

interface MainPageProps {}

const MainPage: React.SFC<MainPageProps> = () => {
  return (
    <MainTemplate>
      <MainTemplate.MainLeft>
        <MainSideMenu />
      </MainTemplate.MainLeft>
      <Switch>
        <Route path="/" render={() => <IllustrationPage />} />
      </Switch>
    </MainTemplate>
  );
};

export default MainPage;
