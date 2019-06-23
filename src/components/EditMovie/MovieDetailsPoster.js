import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import '../MovieList/MovieListRibbon.styles.css';
import {tmdbKey} from '../../config/keys';

const MovieDetailsPoster = (props) => {
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
            <Card className="movie-item-card">
                <div className="movie-poster-container">
                    <CardMedia {...posterProps} />
                </div>
            </Card>
        </div>
    );
};

MovieDetailsPoster.defaultProps = {
    showEditButton: true,
    showTitle: true
}

export default MovieDetailsPoster;