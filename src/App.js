import React, { Fragment } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

const App = () => {
    return (
        <Fragment>
            <header>
                <h1>RoboFriends</h1>
                <SearchBox />
            </header>
            <main>
                <CardList robots={robots} />
            </main>
        </Fragment>
    );
}

export default App;