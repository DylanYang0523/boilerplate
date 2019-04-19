import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import UserList from '../components/userList/index.jsx';

const AppRouter = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/userList">User List</Link>
          </li>
        </ul>
      </nav>
      <Route path="/userList" component={UserList} />
    </Router>
  );
}

export default AppRouter;