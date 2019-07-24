import axios from "axios";

export const setWeather = weather => ({
  type: "SET_WEATHER",
  weather
});

export const getWeather = () => async (dispatch, getState) => {
  const { zipcode } = getState();
  const url = `https://api.weatherbit.io/v2.0/current?postal_code=${zipcode}&key=a926a443283b4a279c2cefa44f07eed5`;
  const results = await axios.get(url);
  dispatch(setWeather(results.data.data[0]));
};
