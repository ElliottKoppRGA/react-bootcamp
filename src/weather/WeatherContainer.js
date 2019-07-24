import { connect } from "react-redux";
import WeatherComponent from "./WeatherComponent";

const mapStateToProps = ({ weather }) => ({
  weather
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherComponent);
