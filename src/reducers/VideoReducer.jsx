import {
    FETCH_VIDEO_LIST
} from "../actions/types";
import * as actions from "../actions"

export default function( state = [], action ) {
    switch(action.type) {
        case FETCH_VIDEO_LIST:
            return [...state, action.payload];
    }

    return state;
}