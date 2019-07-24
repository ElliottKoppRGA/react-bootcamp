import { combineReducers } from 'redux';
import zipcodeReducer from './zipcode/zipcodeReducer';

export default combineReducers({
  zipcode: zipcodeReducer
});
