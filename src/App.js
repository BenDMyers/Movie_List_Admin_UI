import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {getMovies} from './actions/moviesActions';
import DarkModeToggle from './components/layout/DarkModeToggle';
import HeadingBar from './components/layout/HeadingBar';
import EditMovie from './components/EditMovie';
import MovieList from './components/MovieList';

const App = (props) => {
    useEffect(() => {
        props.getMovies();
    });

    return (
        <div>
            <DarkModeToggle />
            <HeadingBar as="h1">What Should Ben Watch Next?</HeadingBar>
            <div>
                <HeadingBar as="h2" backgroundColor="#ffe01b" style={{color: 'black', marginBottom: '20px'}}>
                    Manage movies
                </HeadingBar>
                <Switch>
                    <Route exact path="/">
                        <MovieList />
                    </Route>
                    <Route exact path="/edit/:movieId">
                        <EditMovie />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default connect(null, {getMovies})(App);