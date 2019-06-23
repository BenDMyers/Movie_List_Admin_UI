import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getMovies, TRIGGER_SORT} from './actions/moviesActions';
import DarkModeToggle from './components/layout/DarkModeToggle';
import HeadingBar from './components/layout/HeadingBar';
import MovieList from './components/MovieList';

class App extends Component {
    componentDidMount() {
        this.props.getMovies(TRIGGER_SORT);
    }

    render() {
        return (
            <div>
                <DarkModeToggle />
                <HeadingBar as="h1">What Should Ben Watch Next?</HeadingBar>
                <div>
                    <HeadingBar as="h2" backgroundColor="#ffe01b" style={{color: 'black', marginBottom: '20px'}}>
                        Manage movies
                    </HeadingBar>
                    <MovieList list="recommended" />
                </div>
            </div>
        );
    }
}

export default connect(null, {getMovies})(App);