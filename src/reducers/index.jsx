import {combineReducers} from "redux";
import { reducer as formReducer } from "redux-form";

import VideoReducer from "./VideoReducer";

export default combineReducers({
    videoData: VideoReducer,
    form: formReducer
});