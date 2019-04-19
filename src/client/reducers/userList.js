const initState = {
  isFetching: false,
  data: [],
};

const userList = (state = initState, action) => {
  switch (action.type) {
    case 'GET_USER_LIST_START':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'GET_USER_LIST_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload.data,
      });
    case 'GET_USER_LIST_END':
      return Object.assign({}, state, {
        isFetching: false,
      });
    default:
      return state;
  }
};

export default userList;
