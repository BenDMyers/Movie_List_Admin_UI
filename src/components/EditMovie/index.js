import React, {useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import MaterialButton from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './editMovieButtons.styles.css';
import {getMovies} from '../../actions/moviesActions';
import MovieItem from '../MovieList/MovieItem';

const DEFAULT_MOVIE = {
    list: 'recommended',
    posterProps: {
        src: 'placeholderPoster.png',
        alt: 'Placeholder for poster'
    },
    title: 'Loading...'
};

const EditMovie = (props) => {
    useEffect(() => {
        if(props.movie === DEFAULT_MOVIE) {
            props.getMovies();
        }
    }, [props.movie]);

    return (
        <>
            <Grid item xs={8} sm={4} md={2} style={{padding: '20px'}}>
                <MovieItem {...props.movie} showEditButton={false} />
            </Grid>
            <Grid>
                <Link to="/" className="edit-movie-button cancel-button">
                    <MaterialButton variant="contained">
                        Cancel
                    </MaterialButton>
                </Link>
                <MaterialButton variant="contained" color="primary" className="edit-movie-button save-button">
                    Save
                </MaterialButton>
                <MaterialButton variant="contained" color="secondary" className="edit-movie-button delete-button">
                    Delete
                </MaterialButton>
            </Grid>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    let movie = state.movies.list.filter(m => (m._id === ownProps.match.params.movieId))[0] || DEFAULT_MOVIE;
    return {movie};
}

export default compose(
    withRouter,
    connect(mapStateToProps, {getMovies})
)(EditMovie);