import {
    FETCH_VIDEO,
    FETCH_VIDEO_LIST,
    SEARCH_VIDEO,
    ADD_VIDEO
} from "../actions/types";

export default function( state = { isLoaded: false, isVideoAdded: false }, action ) {
    switch(action.type) {
        case FETCH_VIDEO:
            return {
                ...state,
                video: action.payload.data,
                isLoaded: true
            };
        case FETCH_VIDEO_LIST:
            return {
                ...state,
                videos: action.payload.data,
                isLoaded: true
            };
        case SEARCH_VIDEO:
            return {
                ...state,
                videos: action.payload.data,
                isLoaded: true
            };
        case ADD_VIDEO:
            return {
                ...state,
                isVideoAdded: true
            }
    }

    return state;
}