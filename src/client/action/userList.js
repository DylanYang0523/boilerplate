export const getUserListStart = () => ({
  type: 'GET_USER_LIST_START',
})

export const getUserListSuccess = (data) => {
  return {
    type: 'GET_USER_LIST_SUCCESS',
    payload: {
      data, 
    },
  }
};

export const getUserListEnd = () => ({
  type: 'GET_USER_LIST_END',
});