import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'store';

interface OwnProps {}
interface StateProps {}
interface DispatchProps {}
type AppProps = OwnProps & StateProps & DispatchProps;

const App: React.SFC<AppProps> = () => {
  const user = true;
  return <React.Fragment>{user ? <LoggedIn /> : <LoggedOut />}</React.Fragment>;
};

const LoggedOut: React.SFC = () => {
  return <div>로그아웃</div>;
};

const LoggedIn: React.SFC = () => {
  return <div>로그인</div>;
};

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  state => ({}),
  dispatch => ({}),
)(App);
