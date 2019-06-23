import axios from 'axios';

import {GET_MOVIES} from './types';
import {apiURL} from '../config/keys';

const BASE_URL = apiURL;
// const BASE_URL = 'http://localhost:4000';

export const getMovies = () => (dispatch, getState) => {
    const payload = axios.get(`${BASE_URL}/movies/`);
    dispatch({type: GET_MOVIES, payload});
};