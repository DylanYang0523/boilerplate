import React from 'react';
import { connect } from 'react-redux';
import { getUserListStart, getUserListSuccess, getUserListEnd } from 'Actions/userList';

class UserList extends React.Component {
  componentDidMount() {
    const { getUserListStart, getUserListSuccess, getUserListEnd } = this.props;
    getUserListStart();
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        getUserListSuccess(data);
      })
      .catch(err => getUserListEnd());
  }
  render() {
    const { userList } = this.props;
    return (
      <div>
        <div>Is userList fetching? { String(userList.isFetching) }</div>
        <div>I am UserList page.</div>
        <button>Fetch User List</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.userList,
});

const mapDispatchToProps = dispatch => ({
  getUserListStart: () => dispatch(getUserListStart()),
  getUserListSuccess: data => dispatch(getUserListSuccess(data)),
  getUserListEnd: () => dispatch(getUserListEnd()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);