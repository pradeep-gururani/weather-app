import constants from "./constants";
import { takeLatest, takeEvery, all } from "redux-saga/effects";
import { getWeatherRequest } from "./getWeather/action";

function* watchActions() {
  yield takeLatest(constants.GET_WEATHER_REQUEST, getWeatherRequest);
  
}

export default function* rootSaga() {
  yield all([watchActions()]);
}
