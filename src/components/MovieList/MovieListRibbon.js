import React from 'react';
import {Label} from 'semantic-ui-react';

const RIBBON_OPTIONS = {
    'recommended': {
        color: 'blue',
        text: 'Recommended'
    },
    'watched': {
        color: 'green',
        text: 'Watched'
    },
    'alreadyWatched': {
        color: 'purple',
        text: 'Already Watched'
    },
    'limbo': {
        color: 'red',
        text: 'Limbo'
    }
};

const MovieItemRibbon = (props) => {
    const {color, text} = RIBBON_OPTIONS[props.list];

    return (
        <Label className="movie-item-ribbon" color={color} ribbon="right">
            {text}
        </Label>
    );
};

export default MovieItemRibbon;