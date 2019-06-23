import React, {useState} from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {DatePicker} from 'material-ui-pickers';

import './cardFields.styles.css';
import {updateMovie} from '../../actions/moviesActions';

const MovieDetails = (props) => {
    const handleListChange = (event) => {
        props.setList(event.target.value)
    }

    return (
        <form>
            <Card className="movie-details list-field">
                <center>
                    <InputLabel style={{marginRight: '20px'}} htmlFor="list-helper">List</InputLabel>
                    <Select value={props.list} onChange={handleListChange} input={<Input style={{width: '75%'}} name="list" id="list-helper" />}>
                        <MenuItem value="recommended">Recommended</MenuItem>
                        <MenuItem value="watched">Watched</MenuItem>
                        <MenuItem value="alreadyWatched">Already Watched</MenuItem>
                        <MenuItem value="limbo">Limbo</MenuItem>
                    </Select>
                </center>
            </Card>
            <Card className="movie-details updated-date-field">
                <InputLabel style={{marginRight: '20px'}} htmlFor="updated-date-picker">Updated</InputLabel>
                <DatePicker
                    id="updated-date-picker"
                    style={{width: '75%'}}
                    value={props.updatedDate}
                    onChange={props.setUpdatedDate}
                    format="MMM DD, YYYY"
                />
            </Card>
        </form>
    );
};

export default connect(null, {updateMovie})(MovieDetails);