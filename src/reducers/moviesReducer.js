import {GET_MOVIES} from '../actions/types';
import {byVotesThenTitle, byPreviousOrder} from '../utils/comparators';

const DEFAULT_STATE = {
    list: [],
    initialLoad: true
};

export const moviesReducer = (state=DEFAULT_STATE, action) => {
    switch(action.type) {
        case GET_MOVIES:
            if(action.payload.data) {
                action.meta.triggerSort && action.payload.data.sort(byVotesThenTitle.asc);
                action.meta.maintainOrder && action.payload.data.sort(byPreviousOrder(state.recommended).asc);
            }
            return {list: action.payload.data, initialLoad: false};
        default:
            return state;
    }
}

export default moviesReducer;