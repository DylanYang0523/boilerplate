import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Term } from './HeaderStyle';

class Header extends React.Component {
  render() {
    return (
      <Nav>
        <Link to="/userList">
          <Term>USER LIST</Term>
        </Link>
        <Link to="/search?tab=hashtag">
          <Term>SEARCH</Term>
        </Link>
      </Nav>
    );
  }
}

export default Header;