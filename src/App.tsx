import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'store';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import Core from './containers/etc/Core';

interface OwnProps {}
interface StateProps {}
interface DispatchProps {}
type AppProps = OwnProps & StateProps & DispatchProps;

const App: React.SFC<AppProps> = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
      <Core />
    </React.Fragment>
  );
};

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  state => ({}),
  dispatch => ({}),
)(App);
