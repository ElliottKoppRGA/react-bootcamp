import { combineReducers } from "redux";
import zipcodeReducer from "./zipcode/zipcodeReducer";
import weatherReducer from "./weather/WeatherReducer";

export default combineReducers({
  zipcode: zipcodeReducer,
  weather: weatherReducer
});
