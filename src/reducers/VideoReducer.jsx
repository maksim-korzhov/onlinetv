import {
    FETCH_VIDEO,
    FETCH_VIDEO_LIST,
    SEARCH_VIDEO,
    ADD_VIDEO
} from "../actions/types";

const initialState = {
    isVideoListLoaded: false,
    isVideoLoaded: false,
    isVideoAdded: false
};

export default function( state = initialState, action ) {
    switch(action.type) {
        case FETCH_VIDEO:
            return {
                ...state,
                video: action.payload.data,
                isVideoLoaded: true
            };
        case FETCH_VIDEO_LIST:
            return {
                ...state,
                videos: action.payload.data,
                video: [],
                isVideoListLoaded: true,
                isVideoLoaded: false
            };
        case SEARCH_VIDEO:
            return {
                ...state,
                videos: action.payload.data,
                video: [],
                isVideoListLoaded: true,
                isVideoLoaded: false
            };
        case ADD_VIDEO:
            return {
                ...state,
                isVideoAdded: true
            }
    }

    return state;
}