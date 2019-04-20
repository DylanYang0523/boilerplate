import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import UserList from 'Scene/userList';
import Search from 'Scene/search';

const RootRouter = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/userList">User List</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
      <Route path="/userList" component={UserList} />
      <Route path="/search" component={Search} />
    </Router>
  );
}

export default RootRouter;