import { combineReducers } from 'redux';
import errorManager from './errorReducer';
import mainManager from './mainReducer';

const rootReducer = combineReducers({
  errorManager,
  mainManager,
});

export default rootReducer;
