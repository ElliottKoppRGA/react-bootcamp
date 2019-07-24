import { connect } from "react-redux";
import ZipCodePickerComponent from "./ZipCodePickerComponent";
import { setZipCode } from "./zipcodeActions";
import { getWeather } from "../weather/WeatherActions";

const mapStateToProps = state => ({
  zipcode: state.zipcode
});

const mapDispatchToProps = dispatch => ({
  zipcodeChanged: e => dispatch(setZipCode(e.target.value)),
  getWeatherClicked: () => dispatch(getWeather())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ZipCodePickerComponent);
