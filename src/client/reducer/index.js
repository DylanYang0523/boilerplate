import { combineReducers } from 'redux';
import userList from './userList';

const rootReducer = combineReducers({
  userList,
});

export default rootReducer;