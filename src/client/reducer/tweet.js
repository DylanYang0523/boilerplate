const initState = {
  searchByHashtag: {
    isFetching: false,
    data: [],
    page: 1,
  },
  searchByUser: {
    isFetching: false,
    data: [],
    page: 1,
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
    case 'UPDATE_PAGE_OF_SEARCH_BY_USER':
      return Object.assign({}, state, {
        searchByUser: {
          ...state.searchByUser,
          page: action.payload.page,
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
    case 'UPDATE_PAGE_OF_SEARCH_BY_HASHTAG':
      return Object.assign({}, state, {
        searchByHashtag: {
          ...state.searchByHashtag,
          page: action.payload.page,
        }
      });
    default:
      return state;
  }
};

export default tweet;