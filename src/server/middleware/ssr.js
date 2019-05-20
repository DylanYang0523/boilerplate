import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import rootReducer from 'Reducer';
import App from 'View/App';
import { getUserInfoSuccess, getUserInfoEnd } from 'Action/user';
import axios from 'axios';

const ssr = (req, res) => {
  const sheet = new ServerStyleSheet();
  const store = createStore(rootReducer);

  // TODO: temporary way to handle async api call
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  axios.get(apiUrl, {}, {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  })
  .then(res => {
    return res.data;
  })
  .then(data => {
    const firstFakeUser = data[0];
    store.dispatch(getUserInfoSuccess({
      mugshot: 'https://via.placeholder.com/150/771796',
      name: firstFakeUser.name,
    }));
  })
  .catch(err => {
  })
  .finally(() => {
    store.dispatch(getUserInfoEnd());
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
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
  });
};

export default ssr;