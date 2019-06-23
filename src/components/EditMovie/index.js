import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';

import './editMovieButtons.styles.css';
import {getMovies} from '../../actions/moviesActions';
import EditMovieActions from './EditMovieActions';
import MovieDetails from './MovieDetails';
import MovieDetailsPoster from './MovieDetailsPoster';

import MovieDetailsTitleCard from './MovieDetailsTitleCard';

const DEFAULT_MOVIE = {
    posterProps: {
        src: 'placeholderPoster.png',
        alt: 'Placeholder for poster'
    },
    title: 'Loading...'
};

const getStyle = (width) => {
    switch(width) {
        case 'xs':
        case 'sm':
            return {margin: '0 auto', textAlign: 'center'};
        case 'md':
        case 'lg':
        case 'xl':
            return {marginLeft: '10%', marginRight: '10%', width: '100%'};
        default:
            return {width: '100%'};
    }
};

const createDetail = (movie, field) => {
    return <MovieDetails {...movie} field={field} />;
}

const EditMovie = (props) => {
    console.log(props.movie)
    useEffect(() => {
        if(props.movie === DEFAULT_MOVIE) {
            props.getMovies();
        }
    }, [props.movie]);

    return (
        <>
            <Grid container style={getStyle(props.width)}>
                <Grid item xs={6} sm={4} md={2} style={{padding: '20px'}}>
                    <MovieDetailsPoster {...props.movie} />
                </Grid>
                <Grid item xs={12} sm={8} md={8} style={{padding: '20px'}}>
                    <MovieDetailsTitleCard {...props.movie} />
                    {props.movie.list && <MovieDetails {...props.movie} />}
                </Grid>
            </Grid>
            <EditMovieActions movie={props.movie} />
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    let movie = state.movies.list.filter(m => (m._id === ownProps.match.params.movieId))[0] || DEFAULT_MOVIE;
    return {movie};
}

export default compose(
    withWidth(),
    withRouter,
    connect(mapStateToProps, {getMovies})
)(EditMovie);