import React from 'react';
import {Link} from 'react-router-dom';
import MaterialButton from '@material-ui/core/Button';
import 'semantic-ui-css/semantic.min.css';

import './EditButton.styles.css';

const EditButton = (props) => {
    let buttonProps = {variant: 'contained', color: 'primary'};

    return (
        <Link to={`/edit/${props.movie}`} className="edit-button">
            <MaterialButton {...buttonProps}>
                Edit
            </MaterialButton>
        </Link>
    );
};

export default EditButton;