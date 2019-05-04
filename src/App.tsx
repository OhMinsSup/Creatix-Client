import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Core from './containers/etc/Core';
import loadable from '@loadable/component';
import Etc from './containers/etc/Etc';

import RegisterPage from './pages/RegisterPage';
const MainPage = loadable(() => import('./pages/main/MainPage'));
const EmailLoginPage = loadable(() => import('./pages/EmailLoginPage'));
const IllustWritePage = loadable(() => import('./pages/write/IllustWritePage'));
const BooksWritePage = loadable(() => import('./pages/write/BooksWritePage'));

interface AppProps {}
const App: React.SFC<AppProps> = props => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/:mode(illust|books)" component={MainPage} />
      <Route path="/email-login" component={EmailLoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/write/illust" component={IllustWritePage} />
      <Route path="/write/books" component={BooksWritePage} />
    </Switch>
    <Core />
    <Etc />
  </React.Fragment>
);

export default App;
