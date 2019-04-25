import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, concat, Operation, split } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import StorageProvider from './StorageProvider';
import { toast } from 'react-toastify';

const getToken = () => {
  const storage = StorageProvider.localStorage('creatix');
  const accessToken = storage.get('access_token');
  const refreshToken = storage.get('refresh_token');
  return {
    accessToken,
    refreshToken,
  };
};

const cache = new InMemoryCache().restore((window as any).__APOLLO_STATE__);

const authMiddleware = new ApolloLink((operation: Operation, forward: any) => {
  const storage = StorageProvider.localStorage('creatix');
  const accessToken = storage.get('access_token');
  const refreshToken = storage.get('refresh_token');

  operation.setContext({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return forward(operation);
});

const httpLink = new HttpLink({
  credentials: 'include',
  uri: 'http://localhost:4000/graphql',
});

const wsLink = new WebSocketLink({
  options: {
    connectionParams: {
      access_token: getToken().accessToken,
      refresh_token: getToken().refreshToken,
    },
    reconnect: true,
  },
  uri: 'ws://localhost:4000/subscription',
});

const combinedLinks = split(
  ({ query }) => {
    const { kind, operation }: any = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscriptions';
  },
  wsLink,
  httpLink,
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      toast.error(`Unexpected error: ${message}`);
    });
  }
  if (networkError) {
    toast.error(`Network error: ${networkError}`);
  }
});

const localStateLink = withClientState({
  cache,
  defaults: {
    auth: {
      __typename: 'Auth',
      isLoggedIn: Boolean(
        StorageProvider.localStorage('WhoChat').get('access_token'),
      ),
    },
  },
  resolvers: {
    Mutation: {
      logUserIn: (_: any, { token, user }: any, { cache: appCache }: any) => {
        const { accessToken, refreshToken } = token;
        const storage = StorageProvider.localStorage('creatix');
        storage.set('access_token', accessToken);
        storage.set('refresh_token', refreshToken);
        storage.set('user', user);

        appCache.writeData({
          data: {
            auth: {
              __typename: 'Auth',
              isLoggedIn: true,
            },
          },
        });
        return null;
      },
      logUserOut: (_: any, __: any, { cache: appCache }: any) => {
        const storage = StorageProvider.localStorage('creatix');
        storage.del('access_token');
        storage.del('refresh_token');
        storage.del('user');

        appCache.writeData({
          data: {
            auth: {
              __typename: 'Auth',
              isLoggedIn: false,
            },
          },
        });
        return null;
      },
    },
  },
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    errorLink,
    localStateLink,
    concat(authMiddleware, combinedLinks),
  ]),
});

export default client;
