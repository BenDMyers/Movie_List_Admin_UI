import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import MaterialButton from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import {deleteMovie} from '../../actions/moviesActions';

const EditMovieActions = (props) => {
    const handleDeleteClick = () => {
        let confirmDelete = window.confirm(`Are you sure you want to delete ${props.movie.title}?`);
        confirmDelete && props.deleteMovie(props.movie._id, () => {props.history.push('/');});
    }

    return (
        <Grid container spacing={24} style={{textAlign: 'center'}}>
            <Grid item xs={3} aria-hidden="true" />
            <Grid item xs={2}>
                <Link to="/" className="edit-movie-button cancel-button">
                    <MaterialButton variant="contained">
                        Cancel
                    </MaterialButton>
                </Link>
            </Grid>
            <Grid item xs={2}>
                <MaterialButton onClick={props.handleSaveClick} variant="contained" color="primary" className="edit-movie-button save-button">
                    Save
                </MaterialButton>
            </Grid>
            <Grid item xs={2}>
                <MaterialButton onClick={handleDeleteClick} variant="contained" color="secondary" className="edit-movie-button delete-button">
                    Delete
                </MaterialButton>
            </Grid>
            <Grid item xs={3} aria-hidden="true" />
        </Grid>
    );
};

export default compose(
    withRouter,
    connect(null, {deleteMovie})
)(EditMovieActions);