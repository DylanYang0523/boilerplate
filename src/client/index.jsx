import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import RootRouter from 'View/RootRouter';
import rootReducer from 'Reducer';

import 'normalize.css';

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
        <RootRouter />
      </Provider>
    )
  }
}

renderApp();

if (module.hot) {
  module.hot.accept(App, renderApp);
}