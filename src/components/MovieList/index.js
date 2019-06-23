import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import withWidth from '@material-ui/core/withWidth';

import chunk from '../../utils/chunk';
import MovieListRow from './MovieListRow';

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

const getChunkSize = (width) => {
    switch(width) {
        case 'xs':
            return 1;
        case 'sm':
            return 3;
        case 'md':
        case 'lg':
        case 'xl':
            return 5;
        default:
            return 1;
    }
}

const MovieList = (props) => {
    // Loading spinner
    if(props.initialLoad) {
        return <div className="movie-list-spinner"><CircularProgress thickness={3} /></div>
    }

    // Create rows
    const rowContents = chunk(props.movies, getChunkSize(props.width));
    const rows = rowContents.map((row, index) => (
        <Grid key={index} container item xs={12} spacing={24}>
            <MovieListRow contents={row} />
        </Grid>
    ));

    return (
        <Grid container spacing={8} style={getStyle(props.width)}>
            {rows}
        </Grid>
    );
};

const mapStateToProps = (state, ownProps) => {
    let movies = state.movies[ownProps.list];
    if(ownProps.comparator) {
        movies = [...movies];
        movies.sort(ownProps.comparator);
    }

    return {
        movies,
        initialLoad: state.movies.initialLoad
    };
};

export default compose(
    withWidth(),
    connect(mapStateToProps)
)(MovieList);