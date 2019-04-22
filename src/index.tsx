import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component';
import Root from './Root';
import './index.css';
import * as serviceWorker from './serviceWorker';

loadableReady(() => {
  //   ReactDOM.hydrate(<Root />, document.getElementById('root'));
  ReactDOM.render(<Root />, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
