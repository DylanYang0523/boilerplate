import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'View/App';
import rootReducer from 'Reducer';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

// create redux store and set the redux browser extension
const store = createStore(
  rootReducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const root = document.querySelector('#root');
const renderMethod = process.browser ? ReactDOM.render : ReactDOM.hydrate;
const renderApp = () => {
  renderMethod(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  , root);
};

renderApp();

// set webpack dev server hmr
if (module.hot) {
  module.hot.accept(App, renderApp);
}