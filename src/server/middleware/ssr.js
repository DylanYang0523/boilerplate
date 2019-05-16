import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import rootReducer from 'Reducer';
import App from 'View/App';

const ssr = (req, res) => {
  const sheet = new ServerStyleSheet();
  const store = createStore(rootReducer);
  
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter>
        <StyleSheetManager sheet={sheet.instance}>
          <App />
        </StyleSheetManager>
      </StaticRouter>
    </Provider>
  );

  const styleTags = sheet.getStyleTags();
  sheet.seal();

  const preloadedState = store.getState();
  res.render('index', { html, styleTags, preloadedState });
};

export default ssr;