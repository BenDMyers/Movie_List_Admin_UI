import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getMovies, TRIGGER_SORT} from './actions/moviesActions';
import {setUser} from './actions/userActions';
import DarkModeToggle from './components/layout/DarkModeToggle';
import HeadingBar from './components/layout/HeadingBar';
import MovieList from './components/MovieList';
import Search from './components/Search';
import {byTitle, byWatchedDate} from './utils/comparators';

class App extends Component {
    componentDidMount() {
        this.props.setUser();
        this.props.getMovies(TRIGGER_SORT);
    }

    render() {
        return (
            <div>
                <DarkModeToggle />
                <HeadingBar as="h1">What Should Ben Watch Next?</HeadingBar>
                <div>
                    <HeadingBar as="h2" backgroundColor="#ffe01b" style={{color: 'black'}}>
                        Manage movies
                    </HeadingBar>
                    <MovieList list="recommended" />
                </div>
            </div>
        );
    }
}

export default connect(null, {getMovies, setUser})(App);