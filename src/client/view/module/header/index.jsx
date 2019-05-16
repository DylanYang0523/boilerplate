import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  Nav,
  Term, 
  UserInfoCtn,
  UserMugshot,
  UserName,
} from './HeaderStyle';
import {
  getUserInfoStart,
  getUserInfoSuccess,
  getUserInfoEnd,
} from 'Action/user';

class Header extends React.Component {
  componentDidMount() {
    const {
      getUserInfoStart,
      getUserInfoSuccess,
      getUserInfoEnd,
    } = this.props;
    
    getUserInfoStart();
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(data => {
      const firstFakeUser = data[0];
      getUserInfoSuccess({
        mugshot: 'https://via.placeholder.com/150/771796',
        name: firstFakeUser.name,
      });
    })
    .catch(err => {
    })
    .finally(() => {
      getUserInfoEnd();
    });
  }
  render() {
    const { user } = this.props;
    return (
      <Nav>
        <Link to="/search">
          <Term>Tweet Searcher</Term>
        </Link>
        <UserInfoCtn>
          <UserMugshot src={user.info.mugshot} />
          <UserName>{user.info.name}</UserName>
        </UserInfoCtn>
      </Nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  getUserInfoStart: () => dispatch(getUserInfoStart()),
  getUserInfoSuccess: data => dispatch(getUserInfoSuccess(data)),
  getUserInfoEnd: () => dispatch(getUserInfoEnd()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);