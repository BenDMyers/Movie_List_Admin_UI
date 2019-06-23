import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Grid from '@material-ui/core/Grid';

import './editMovieButtons.styles.css';
import {getMovies} from '../../actions/moviesActions';
import MovieItem from '../MovieList/MovieItem';
import EditMovieActions from './EditMovieActions';

const DEFAULT_MOVIE = {
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
        <div style={{width: '100%'}}>
            <Grid container>
                <Grid item xs={8} sm={4} md={2} style={{padding: '20px'}}>
                    <MovieItem {...props.movie} showEditButton={false} />
                </Grid>
            </Grid>
            <EditMovieActions />
        </div>
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