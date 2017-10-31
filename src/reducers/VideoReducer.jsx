import {
    FETCH_VIDEO,
    FETCH_VIDEO_LIST
} from "../actions/types";
import * as actions from "../actions"

export default function( state = {}, action ) {
    switch(action.type) {
        case FETCH_VIDEO:
            return {
                ...state,
                video: action.payload.video
            };
        case FETCH_VIDEO_LIST:
            return {
                ...state,
                videos: action.payload.videos
            };
    }

    return state;
}