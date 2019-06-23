import axios from 'axios';

import {DELETE_MOVIE, GET_MOVIES, UPDATE_MOVIE} from './types';
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

export const updateMovie = (movieId, updates, callback) => (dispatch) => {
    const payload = axios.put(`${BASE_URL}/movies/${movieId}`, updates)
        .then(() => {
            console.log('Updating');
            dispatch({type: UPDATE_MOVIE, payload});
            dispatch(getMovies());
            callback();
        })
        .catch(err => {
            console.log(err)
        });
}