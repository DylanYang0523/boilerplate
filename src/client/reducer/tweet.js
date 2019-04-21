const initState = {
  searchByHashtag: {
    isFetching: false,
    data: [],
  },
  searchByUser: {
    isFetching: false,
    data: [],
  }
};

const tweet = (state = initState, action) => {
  switch (action.type) {
    case 'GET_SEARCH_BY_USER_START':
      return Object.assign({}, state, {
        searchByUser: {
          ...state.searchByUser,
          isFetching: action.payload.isFetching,
        }
      });
    case 'GET_SEARCH_BY_USER_SUCCESS':
      return Object.assign({}, state, {
        searchByUser: {
          ...state.searchByUser,
          data: action.payload.data,
        }
      });
    case 'GET_SEARCH_BY_USER_END':
      return Object.assign({}, state, {
        searchByUser: {
          ...state.searchByUser,
          isFetching: action.payload.isFetching,
        }
      });
    case 'GET_SEARCH_BY_HASHTAG_START':
      return Object.assign({}, state, {
        searchByHashtag: {
          ...state.searchByHashtag,
          isFetching: action.payload.isFetching,
        }
      });
    case 'GET_SEARCH_BY_HASHTAG_SUCCESS':
      return Object.assign({}, state, {
        searchByHashtag: {
          ...state.searchByHashtag,
          data: action.payload.data,
        }
      });
    case 'GET_SEARCH_BY_HASHTAG_END':
      return Object.assign({}, state, {
        searchByHashtag: {
          ...state.searchByHashtag,
          isFetching: action.payload.isFetching,
        }
      });
    default:
      return state;
  }
};

export default tweet;