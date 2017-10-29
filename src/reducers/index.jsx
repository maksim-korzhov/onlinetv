import {combineReducers} from "redux";

export default combineReducers({
    data: (store = []) => {return store;}
});
