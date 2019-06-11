import { createAction } from "redux-actions";
import constants from "./constants";
export const getWeatherRequest = createAction(constants.GET_WEATHER_REQUEST);
export const getWeatherSuccess = createAction(constants.GET_WEATHER_SUCCESS);
export const getWeatherError = createAction(constants.GET_WEATHER_ERROR);

