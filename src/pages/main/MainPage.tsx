import React from 'react';
import MainTemplate from '../../components/main/MainTemplate';
import MainSideMenu from '../../components/main/MainSideMenu';
import { Switch, Route } from 'react-router-dom';
import IllustrationPage from './IllustrationPage';

interface MainPageProps {}

const MainPage: React.SFC<MainPageProps> = () => {
  return (
    <MainTemplate>
      <div>안녕핫요</div>
      <MainTemplate.MainLeft>
        <MainSideMenu />
      </MainTemplate.MainLeft>
      <Switch>
        <Route path="/" component={IllustrationPage} />
      </Switch>
      <MainTemplate.Right>
        <div>유저와 포스트 추천</div>
        <div>아마도??</div>
        <div>아니면 각 장르별 추천이나 순위</div>
        <div>일수도</div>
      </MainTemplate.Right>
    </MainTemplate>
  );
};

export default MainPage;
