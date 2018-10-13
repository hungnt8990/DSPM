import { combineReducers } from 'redux';
import LoginReducer from '../reducers/LOGIN/LoginReducer';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  LoginReducer,
});

export default rootReducer;