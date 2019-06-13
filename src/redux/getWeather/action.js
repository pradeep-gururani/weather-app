import * as actions from "../actions";
import { call, put, select } from "redux-saga/effects";
import axios from "axios";
export function* getWeatherRequest(action) {
    
    let error = null;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${action.payload.city},${action.payload.country}&units=metric&appid=5d3b72d019b64f7c5e2b0ee30ebe93ca`;
    const res = yield axios
        .get(url, {
        method: "POST"
        })
        .then(res => {
        return res;
        })
        .catch(err => {
        error = err;
        return err;
        });

    if (error !== null) {
        yield put(actions.getWeatherError({ message: "Error in api request" }));
    } else {
        yield put(actions.getWeatherSuccess({ data: res.data }));
    }

  }
  