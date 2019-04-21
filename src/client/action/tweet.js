// search by user
export const getSearchByUserStart = () => ({
  type: 'GET_SEARCH_BY_USER_START',
  payload: {
    isFetching: true, 
  },
})
export const getSearchByUserSuccess = (data) => ({
  type: 'GET_SEARCH_BY_USER_SUCCESS',
  payload: {
    data, 
  },
});
export const getSearchByUserEnd = () => ({
  type: 'GET_SEARCH_BY_USER_END',
  payload: {
    isFetching: false, 
  },
});

// search by hashtag
export const getSearchByHashtagStart = () => ({
  type: 'GET_SEARCH_BY_HASHTAG_START',
  payload: {
    isFetching: true, 
  },
})
export const getSearchByHashtagSuccess = (data) => ({
  type: 'GET_SEARCH_BY_HASHTAG_SUCCESS',
  payload: {
    data, 
  },
});
export const getSearchByHashtagEnd = () => ({
  type: 'GET_SEARCH_BY_HASHTAG_END',
  payload: {
    isFetching: false, 
  },
});