import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import './MovieListRibbon.styles.css';
import {tmdbKey} from '../../config/keys';
import EditButton from './EditButton';
import MovieListRibbon from './MovieListRibbon';

const cardActionsStyles = {
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: '16px'
};

const MovieItem = (props) => {
    const title = `${props.title} (${props.year})`;

    const posterProps = {
        className: 'card-movie-poster',
        component: 'img'
    };
    if(props.poster) {
        posterProps.src = `https://image.tmdb.org/t/p/original${props.poster}?api_key=${tmdbKey}`;
        posterProps.alt = `Poster for ${title}`;
    } else {
        posterProps.src = 'placeholderPoster.png';
        posterProps.alt = 'Placeholder for poster';
    }

    return (
        <div style={{position: 'relative'}}>
            <Card id={`movie-${props._id}`} className="movie-item-card">
                <div className="movie-poster-container">
                    <CardMedia {...posterProps} />
                    <MovieListRibbon list={props.list} describes={props._id} />
                </div>
                <span className="screenreader">{title}</span>
                <CardContent aria-hidden="true" className="card-movie">
                    <div className="card-movie-title">
                        {props.title}
                    </div>
                    <div aria-hidden="true" className="card-movie-year">
                        {props.year}
                    </div>
                </CardContent>
                <CardActions style={cardActionsStyles}>
                    <EditButton movie={props._id} />
                </CardActions>
            </Card>
        </div>
    );
};

export default MovieItem;