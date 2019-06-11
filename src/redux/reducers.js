import {combineReducers} from "redux";
import getWeather from "./getWeather/reducer";
const rootReducer = combineReducers({
    getWeather
});

export default rootReducer;