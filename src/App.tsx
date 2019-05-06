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
const App: React.SFC<AppProps> = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" render={props => <MainPage {...props} />} />
      <Route
        path="/:mode(illust|books)"
        render={props => <MainPage {...props} />}
      />
      <Route
        path="/email-login"
        render={props => <EmailLoginPage {...props} />}
      />
      <Route path="/register" render={props => <RegisterPage {...props} />} />
      <Route
        path="/write/illust"
        render={props => <IllustWritePage {...props} />}
      />
      <Route
        path="/write/books"
        render={props => <BooksWritePage {...props} />}
      />
    </Switch>
    <Core />
    <Etc />
  </React.Fragment>
);

export default App;
