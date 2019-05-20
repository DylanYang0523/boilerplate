import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'Module/header';
import Home from 'Scene/home';
import Search from 'Scene/search';

// normalize and global css
import { Normalize } from 'styled-normalize'
import AppStyle from './AppStyle';

const App = () => {
  return (
    <React.Fragment>
      <Normalize />
      <AppStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
      </Switch>
    </React.Fragment>
  );
}

export default App;