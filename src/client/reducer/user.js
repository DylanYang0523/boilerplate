const initState = {
  isFetching: false,
  info: {
    mugshot: 'https://via.placeholder.com/150/92c952',
    name: '... ...',
  },
};

const user = (state = initState, action) => {
  switch (action.type) {
    case 'GET_USER_INFO_START':
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching,
      });
    case 'GET_USER_INFO_SUCCESS':
      return Object.assign({}, state, {
        info: action.payload.data,
      });
    case 'GET_USER_INFO_END':
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching,
      });
    default:
      return state;
  }
};

export default user;