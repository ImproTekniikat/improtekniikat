import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';
import { makeMainRoutes } from './routes';
import history from './history';

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    appState: reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware, thunk)
);

//const store = createStore(reducers, applyMiddleware(thunk));
const routes = makeMainRoutes(history);

ReactDOM.render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById('root')
);
