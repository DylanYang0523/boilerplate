import { combineReducers } from 'redux';
import tweet from './tweet';

const rootReducer = combineReducers({
  tweet,
});

export default rootReducer;