import weatherReducer from "./WeatherReducer";
import { setWeather } from "./WeatherActions";

describe("WeatherReducer", () => {
  it("should set weather state", () => {
    expect(
      weatherReducer({}, setWeather({ weather: { description: "sunny" } }))
    ).toEqual({
      weather: {
        description: "sunny"
      }
    });
  });
});
