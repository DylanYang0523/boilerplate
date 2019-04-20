import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from 'Module/header';
import UserList from 'Scene/userList';
import Search from 'Scene/search';

import { Normalize } from 'styled-normalize'
import RootRouterStyle from './RootRouterStyle';

const RootRouter = () => {
  return (
    <Router>
      <Normalize />
      <RootRouterStyle />
      <Header />
      <Route path="/userList" component={UserList} />
      <Route path="/search" component={Search} />
    </Router>
  );
}

export default RootRouter;