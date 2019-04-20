import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppRouter from './route';
import rootReducer from './reducer';

const root = document.querySelector('#root');
const renderApp = () => {
  ReactDOM.render(<App />, root);
};

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
}

renderApp();

if (module.hot) {
  module.hot.accept(App, renderApp);
}