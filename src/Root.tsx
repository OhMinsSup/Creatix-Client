import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

import App from './App';
import configureStore from './store/configure';
import client from './lib/apollo';

const preloadedState =
  typeof window === 'undefined' ? undefined : (window as any).__REDUX_STATE__;
const store = configureStore(preloadedState);

const Root: React.SFC = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>
);

export default Root;
