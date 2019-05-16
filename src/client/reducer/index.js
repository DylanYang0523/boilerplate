import { combineReducers } from 'redux';
import tweet from './tweet';
import user from './user';

const rootReducer = combineReducers({
  tweet,
  user,
});

export default rootReducer;