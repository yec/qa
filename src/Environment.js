const {
  Environment,
  Network,
  RecordSource,
  Store,
  QueryResponseCache,
} = require('relay-runtime')

import configureStore from './store/configureStore';

const reduxStore = configureStore();
const store = new Store(new RecordSource())
const __RELAY_API_ENDPOINT__ = 'https://api.graph.cool/relay/v1/cjp4o1t9ln3kh0198j7x9kk84';
const cache = new QueryResponseCache({size: 100, ttl: 100000});

const network = Network.create((operation, variables, cacheConfig, uploadables) => {

  const queryId = operation.name
  const cachedData = cache.get(queryId, variables);

  // Handle force option in RefetchOptions
  // See: https://facebook.github.io/relay/docs/pagination-container.html
  // https://facebook.github.io/relay/docs/refetch-container.html
  const forceLoad = cacheConfig && cacheConfig.force

  if (!forceLoad && cachedData) {
    reduxStore.dispatch({ type: 'MENU_CLOSE'})
    return cachedData;
  }

  if (forceLoad) {
    // clear() means to reset all the cache, not only the entry addressed by specific queryId.
    // See blog comments for more details.
    cache.clear()
  }

  return fetch(__RELAY_API_ENDPOINT__, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    const data = response.json();
    // A cache key, queryId in this code, should be unique per query.
    cache.set(queryId, variables, data);
    reduxStore.dispatch({ type: 'MENU_CLOSE'})
    return data  })
})

const environment = new Environment({
  network,
  store,
})

export default environment
