import { connect } from 'react-redux';
import ZipCodePickerComponent from './ZipCodePickerComponent';
import { setZipCode } from './zipcodeActions';

const mapStateToProps = state => ({
  zipcode: state.zipcode
});

const mapDispatchToProps = dispatch => ({
  zipcodeChanged: e => dispatch(setZipCode(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ZipCodePickerComponent);
