import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Term } from './HeaderStyle';

class Header extends React.Component {
  render() {
    return (
      <Nav>
        <Link to="/search?tab=hashtag">
          <Term>Tweet Searcher</Term>
        </Link>
      </Nav>
    );
  }
}

export default Header;