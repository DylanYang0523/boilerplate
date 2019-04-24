import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from 'Module/header';
import Search from 'Scene/search';

// normalize and global css
import { Normalize } from 'styled-normalize'
import RootRouterStyle from './RootRouterStyle';

const RootRouter = () => {
  return (
    <Router>
      <Normalize />
      <RootRouterStyle />
      <Header />
      <Route path="*" component={Search} />
    </Router>
  );
}

export default RootRouter;