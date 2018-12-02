/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import 'animate.css';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico
import { createRelayEnvironment } from './relayEnvironment'

const environment = createRelayEnvironment(window.__RELAY_BOOTSTRAP_DATA__)
const store = configureStore();

render(
  <AppContainer>
      <Root environment={environment} store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
