import {combineReducers} from "redux";
import VideoReducer from "./VideoReducer";

export default combineReducers({
    videoList: VideoReducer
});
