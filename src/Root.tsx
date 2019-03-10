import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './store/configure';

const preloadedState =
  typeof window === 'undefined' ? undefined : (window as any).__REDUX_STATE__;
const store = configureStore(preloadedState);

const Root: React.SFC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Root;
