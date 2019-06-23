import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {DatePicker} from 'material-ui-pickers';

import './cardFields.styles.css';

const MovieDetails = (props) => {
    const [list, setList] = useState(props.list);
    const handleListChange = (event) => {
        setList(event.target.value)
    }

    const [updatedDate, setUpdatedDate] = useState(Date.now());

    return (
        <form>
            <Card className="movie-details list-field">
                <center>
                    <InputLabel style={{marginRight: '20px'}} htmlFor="list-helper">List</InputLabel>
                    <Select value={list} onChange={handleListChange} input={<Input style={{width: '75%'}} name="list" id="list-helper" />}>
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
                    value={updatedDate}
                    onChange={setUpdatedDate}
                    format="MMM DD, YYYY"
                />
            </Card>
        </form>
    );
};

export default MovieDetails;