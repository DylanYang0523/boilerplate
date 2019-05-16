// get user info
export const getUserInfoStart = () => ({
  type: 'GET_USER_INFO_START',
  payload: {
    isFetching: true,
  },
});
export const getUserInfoSuccess = data => ({
  type: 'GET_USER_INFO_SUCCESS',
  payload: {
    data,
  },
});
export const getUserInfoEnd = () => ({
  type: 'GET_USER_INFO_END',
  payload: {
    isFetching: false,
  },
});