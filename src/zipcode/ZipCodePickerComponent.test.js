import React from "react";
import { render, cleanup } from "@testing-library/react";
import ZipCodePickerComponent from "./ZipCodePickerComponent";

describe("ZipCodePickerComponent", () => {
  afterEach(cleanup);
  it("should render zipcode", () => {
    const zipcode = "90210";
    const zipcodeChanged = jest.fn();
    const getWeatherClicked = jest.fn();
    const { container } = render(
      <ZipCodePickerComponent
        zipcode={zipcode}
        zipcodeChanged={zipcodeChanged}
        getWeatherClicked={getWeatherClicked}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
