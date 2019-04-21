import { combineReducers } from 'redux';
import userList from './userList';
import tweet from './tweet';

const rootReducer = combineReducers({
  userList,
  tweet,
});

export default rootReducer;