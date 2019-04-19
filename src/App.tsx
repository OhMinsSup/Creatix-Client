import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Core from './containers/etc/Core';
import loadable from '@loadable/component';
import Etc from './containers/etc/Etc';

const MainPage = loadable(() => import('./pages/main/MainPage'));
const RegisterPage = loadable(() => import('./pages/RegisterPage'));
const EmailLoginPage = loadable(() => import('./pages/EmailLoginPage'));

interface AppProps {}
const App: React.SFC<AppProps> = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/:mode(illust|books)" render={() => <MainPage />} />
        <Route path="/email-login" render={() => <EmailLoginPage />} />
        <Route path="/register" render={() => <RegisterPage />} />
      </Switch>
      <Core />
      <Etc />
    </React.Fragment>
  );
};

export default App;
