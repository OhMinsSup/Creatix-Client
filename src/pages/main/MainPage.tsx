import React from 'react';
import MainTemplate from '../../components/main/MainTemplate';
import MainSideMenu from '../../components/main/MainSideMenu';
import { Switch, Route } from 'react-router-dom';
import IllustrationPage from './IllustrationPage';
import FeedContentContainer from '../../containers/main/FeedContentContainer';

interface MainPageProps {}

const MainPage: React.SFC<MainPageProps> = () => {
  return (
    <MainTemplate>
      <MainTemplate.MainLeft>
        <MainSideMenu />
      </MainTemplate.MainLeft>
      <Switch>
        <Route path="/" component={IllustrationPage} />
      </Switch>
      <MainTemplate.Right>
        <FeedContentContainer />
      </MainTemplate.Right>
    </MainTemplate>
  );
};

export default MainPage;
