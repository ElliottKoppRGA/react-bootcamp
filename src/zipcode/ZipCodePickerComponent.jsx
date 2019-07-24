import React from 'react';
import propTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ZipCodePickerComponent = ({ zipcodeChanged, zipcode }) => (
  <div>
    <TextField placeholder="Enter a zip code" onChange={zipcodeChanged} value={zipcode} />
    <Button variant="contained" color="primary">
      Get Weather
    </Button>
    <p>The zipcode is: {zipcode}</p>
  </div>
);

ZipCodePickerComponent.displayName = 'ZipCodePickerComponent';

ZipCodePickerComponent.propTypes = {
  zipcodeChanged: propTypes.func.isRequired,
  zipcode: propTypes.string.isRequired
}

export default ZipCodePickerComponent;
