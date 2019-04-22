import React from 'react';
import MainTemplate from '../../components/main/MainTemplate';
import MainSideMenu from '../../components/main/MainSideMenu';
import { Switch, Route } from 'react-router-dom';
import IllustrationPage from './IllustrationPage';
import FeedContentContainer from '../../containers/main/FeedContentContainer';

interface MainPageProps {}

const MainPage: React.SFC<MainPageProps> = () => (
  <MainTemplate>
    <MainTemplate.MainLeft>
      <MainSideMenu />
    </MainTemplate.MainLeft>
    <Switch>
      <Route path="/" component={IllustrationPage} />
    </Switch>
    <MainTemplate.MainRight>
      <FeedContentContainer />
    </MainTemplate.MainRight>
  </MainTemplate>
);

export default MainPage;
