import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from 'Module/header';
import UserList from 'Scene/userList';
import Search from 'Scene/search';

import './rootRouter.scss';

const RootRouter = () => {
  return (
    <Router>
      <Header />
      <Route path="/userList" component={UserList} />
      <Route path="/search" component={Search} />
    </Router>
  );
}

export default RootRouter;