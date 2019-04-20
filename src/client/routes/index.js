import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import UserList from 'Components/userList';
import Search from 'Components/search';

const AppRouter = () => {
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

export default AppRouter;