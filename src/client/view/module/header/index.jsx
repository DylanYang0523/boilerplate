import React from 'react';
import { Link } from 'react-router-dom';

import './style/index.scss';

class Header extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Header;