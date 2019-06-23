import {GET_MOVIES} from '../actions/types';
import {byVotesThenTitle, byPreviousOrder} from '../utils/comparators';

const DEFAULT_STATE = {
    alreadyWatched: [],
    recommended: [],
    watched: [],
    all: [],
    initialLoad: true
}

export const moviesReducer = (state=DEFAULT_STATE, action) => {
    switch(action.type) {
        case GET_MOVIES:
            // Combine all lists in response into one big list
            let all = [];
            if(action.payload.data) {
                all = Object.values(action.payload.data).reduce((acc, cur) => {
                    return acc = [...acc, ...cur];
                }, []);

                action.meta.triggerSort && action.payload.data.recommended.sort(byVotesThenTitle.asc);
                action.meta.maintainOrder && action.payload.data.recommended.sort(byPreviousOrder(state.recommended).asc);
            }
            return {...DEFAULT_STATE, ...action.payload.data, all, initialLoad: false};
        default:
            return state;
    }
}

export default moviesReducer;