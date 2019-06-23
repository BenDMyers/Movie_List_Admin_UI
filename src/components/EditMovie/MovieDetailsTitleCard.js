import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import moment from 'moment';

const MovieDetailsTitleCard = (props) => {
    const numVotes = (props.votes && props.votes.length) || 0;
    const voteOrVotes = numVotes === 1 ? 'vote' : 'votes';
    const recommendedDate = props.recommendedDate ? moment(props.recommendedDate) : moment();
    const screenreaderDate = recommendedDate.format('MMMM D, YYYY');
    const formattedDate = recommendedDate.format('MMM D, YYYY');
    const title = `${props.title} (${props.year})`;
    const subtitle = `${numVotes} ${voteOrVotes}. Added ${screenreaderDate}.`;

    console.log(props);
    return (
        <Card className="movie-details">
            <CardContent>
                <div className="card-movie" style={{height: 'auto', paddingTop: '10px'}}>
                    <span className="screenreader">{title} {subtitle}</span>
                    <div className="card-movie-title">
                        {props.title} ({props.year})
                    </div>
                    <div aria-hidden="true" className="card-movie-year" style={{paddingTop: '5px'}}>
                        {numVotes} {voteOrVotes} &bull; Added {formattedDate}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default MovieDetailsTitleCard;