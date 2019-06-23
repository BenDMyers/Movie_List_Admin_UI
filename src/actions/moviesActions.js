import axios from 'axios';

import {GET_MOVIES} from './types';
import {apiURL} from '../config/keys';

export const TRIGGER_SORT = 'triggerSort';
export const MAINTAIN_ORDER = 'maintainOrder';

const BASE_URL = apiURL;
// const BASE_URL = 'http://localhost:4000';

export const getMovies = (sortStrategy) => (dispatch, getState) => {
    const payload = axios.get(`${BASE_URL}/movies/`);
    console.log(`${BASE_URL}/movies/`)
    let meta = {};
    sortStrategy && (meta[sortStrategy] = true);
    dispatch({type: GET_MOVIES, payload, meta});
};