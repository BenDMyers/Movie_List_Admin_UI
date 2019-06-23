import React from 'react';
import {Link} from 'react-router-dom';
import MaterialButton from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const EditMovieActions = (props) => {
    return (
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
    );
};

export default EditMovieActions;