import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import rootReducer from 'Reducer';
import App from 'View/App';

const ssr = (req, res) => {
  const store = createStore(rootReducer);
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter>
        <App />
      </StaticRouter>
    </Provider>
  );
  
  const preloadedState = store.getState();
  res.render('index', { html, preloadedState });
};

export default ssr;