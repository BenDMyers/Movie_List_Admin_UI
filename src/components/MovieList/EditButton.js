import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';
import MaterialButton from '@material-ui/core/Button';
import 'semantic-ui-css/semantic.min.css';

import './EditButton.styles.css';

const EditButton = (props) => {
    const handleClick = () => {

    };

    let buttonProps = {variant: 'contained', color: 'primary', onClick: handleClick};

    return (
        <Button as='div' className="edit-button">
            <MaterialButton {...buttonProps}>
                Edit
            </MaterialButton>
        </Button>
    );
};

const mapStateToProps = (state, ownProps) => {
    const movie = state.movies.list.filter(m => m._id === ownProps.movie)[0];
    return {
        numVotes: movie.votes.length,
        userHasAlreadyVoted: false,
        uuid: state.user
    };
};

export default connect(mapStateToProps)(EditButton);