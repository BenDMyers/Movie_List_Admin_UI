import axios from 'axios';

import {DELETE_MOVIE, GET_MOVIES} from './types';
import {apiURL} from '../config/keys';

const BASE_URL = apiURL;
// const BASE_URL = 'http://localhost:4000';

export const getMovies = () => (dispatch, getState) => {
    const payload = axios.get(`${BASE_URL}/movies/`);
    dispatch({type: GET_MOVIES, payload});
};

export const deleteMovie = (movieId, callback) => (dispatch) => {
    const payload = axios.delete(`${BASE_URL}/movies/${movieId}`)
        .then(() => {
            dispatch({type: DELETE_MOVIE, payload});
            dispatch(getMovies());
            callback();
        });
}