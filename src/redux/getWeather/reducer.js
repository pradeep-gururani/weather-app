import constants from "../constants";
import { handleActions } from "redux-actions";
import update from "immutability-helper";
const initialState = {
    searchedWeather: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: "",
        data: {},
        isFieldFocused: false
      },
};

const handleGetWeatherRequest = (state, action) =>
  update(state, {
    searchedWeather:{
        isLoading: { $set: true },
        isSuccess: { $set: false },
        isError: { $set: false },
        message: { $set: "" }
    }
  });

const handleGetWeatherSuccess = (state, action) =>
  update(state, {
    searchedWeather:{
        isLoading: { $set: false },
        isSuccess: { $set: true },
        isError: { $set: false },
        message: { $set: "successfully got weather data" },
        data: { $set: action.payload.data }
    }
    
  });
const handleGetWeatherError = (state, action) => {
  return update(state, {
    searchedWeather:{
        isLoading: { $set: false },
        isSuccess: { $set: false },
        isError: { $set: true },
        message: { $set: action.payload.message },
        data: { $set: {} }
    }
    
  });
};

export default handleActions(
  {
    [constants.GET_WEATHER_REQUEST]: handleGetWeatherRequest,
    [constants.GET_WEATHER_SUCCESS]: handleGetWeatherSuccess,
    [constants.GET_WEATHER_ERROR]: handleGetWeatherError
  },
  initialState
);
