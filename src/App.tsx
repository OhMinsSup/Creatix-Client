import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Core from './containers/etc/Core';
import loadable from '@loadable/component';

const MainPage = loadable(() => import('./pages/main/MainPage'));

interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
      </Switch>
      <Core />
    </React.Fragment>
  );
};

export default App;
