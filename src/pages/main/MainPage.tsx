import React from 'react';
import MainTemplate from '../../components/main/MainTemplate';
import MainSideMenu from '../../components/main/MainSideMenu';
import RecentPostPage from './RecentPostPage';
import { Switch, Route } from 'react-router-dom';

interface MainPageProps {}

const MainPage: React.SFC<MainPageProps> = () => {
  return (
    <MainTemplate>
      <MainTemplate.MainLeft>
        <MainSideMenu />
      </MainTemplate.MainLeft>
      <Switch>
        <Route path="/" component={RecentPostPage} />
      </Switch>
    </MainTemplate>
  );
};

export default MainPage;
