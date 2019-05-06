import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express, { Router, Request, Response, NextFunction } from 'express';
import { ChunkExtractor } from '@loadable/server';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { StaticRouter } from 'react-router';
import { ServerStyleSheet } from 'styled-components';
import fetch from 'isomorphic-fetch';
import path from 'path';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import proxy from 'express-http-proxy';
import 'localstorage-polyfill';
import App from './App';

(global as any)['localStorage'] = localStorage;

const app = express();

const clientStats = path.resolve('./build/loadable-stats.json');

function createPage(
  html: string,
  collected: { script: string; link: string; style: string },
) {
  return `<!doctype html>
    <html lang="en">
    
    <head>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="/manifest.json" />
      <title>React App</title>
      ${collected.link}
      ${collected.style}
    </head>
    
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">${html}</div>
      ${collected.script}
    </body>
    
    </html>`;
}

/**
 * Process server rendering
 */

const render = async (req: Request, res: Response, next: NextFunction) => {
  if (req.path === '/graphql') {
    return next();
  }

  const context = {};
  const extractor = new ChunkExtractor({ statsFile: clientStats });

  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: 'http://localhost:4000/graphql',
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  const Root = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  const jsx = extractor.collectChunks(Root);

  try {
    await getDataFromTree(jsx);
  } catch (e) {
    throw e;
  }

  const initialState = client.extract();
  const apolloStateScript = `<script>window.__APOLLO_STATE__ = ${JSON.stringify(
    initialState,
  ).replace(/</g, '\\u003c')}</script>`;
  const sheet = new ServerStyleSheet();
  const rendered = ReactDOMServer.renderToString(sheet.collectStyles(jsx));
  const scStyles = sheet.getStyleTags();
  const collected = {
    script: apolloStateScript + extractor.getScriptTags(),
    link: extractor.getLinkTags(),
    style: extractor.getStyleTags() + scStyles,
  };
  const page = createPage(rendered, collected);
  res.send(page);
};

const router = Router();

router.get('/', (req, res, next) => {
  return render(req, res, next);
});

app.use(express.static(path.resolve(__dirname, '../build')));

app.use((req, res, next) => {
  if (!req.route) {
    return render(req, res, next);
  }
  return next();
});

app.use('/graphql', proxy('http://localhost:4000'));

app.listen(4001, () =>
  console.log('SSR server listening to http://localhost:4001'),
);
