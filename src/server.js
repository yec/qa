import React from 'react'
import express from 'express'
import { Network, Environment, RecordSource, Store } from 'relay-runtime'
import Root from './components/Root';
import { renderToString } from 'react-dom/server'
import { createRelayEnvironment } from './relayEnvironment'
import { ServerStyleSheet } from 'styled-components';
import createHistory from 'history/createMemoryHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers'

const app = express()

app.use(async (req, res, next) => {

  let history = createHistory();
  let reactRouterMiddleware = routerMiddleware(history);
  let connectRouterHistory = connectRouter(history);
  let reduxStore = createStore(
    connectRouterHistory(rootReducer),
    // {app: {menuOpen: true}},
    compose(applyMiddleware(reactRouterMiddleware))
  );

  history.push(req.url);

  const sheet = new ServerStyleSheet();

  const environment = createRelayEnvironment()
  renderToString(<Root history={history} store={reduxStore} environment={environment} />)
  const relayData = await environment.relaySSRMiddleware.getCache()

  const source = new RecordSource()
  const store = new Store(source)
  const html = renderToString(sheet.collectStyles(
    <Root
      history={history}
      store={reduxStore}
      environment={new Environment({
        network: Network.create(() => relayData[0][1]),
        store,
      })}
    />
  ))

  const styleTags = sheet.getStyleTags();

  res.status(200).send(`
    <html>
      <head>
        <title>Qantas Cars</title>
        <link rel="stylesheet" href="/assets/hellocms.css"/>
      </head>
      <body>
        ${styleTags}
        <div id="app">${html}</div>
        <script>
          window.__RELAY_BOOTSTRAP_DATA__ = ${JSON.stringify(relayData)};
        </script>

        <script src="/assets/hellocms.js"></script>
      </body>
    </html>
  `)
})

export default app
