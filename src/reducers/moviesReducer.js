import {GET_MOVIES} from '../actions/types';
import {byTitle} from '../utils/comparators';

const DEFAULT_STATE = {
    list: [],
    initialLoad: true
};

export const moviesReducer = (state=DEFAULT_STATE, action) => {
    switch(action.type) {
        case GET_MOVIES:
            if(action.payload.data) {
                action.payload.data.sort(byTitle.asc);
            }
            return {list: action.payload.data, initialLoad: false};
        default:
            return state;
    }
}

export default moviesReducer;