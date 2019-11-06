import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <Fragment>
                <header className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                </header>
                <main className='tc'>
                    <CardList robots={filteredRobots} />
                </main>
            </Fragment >
        );
    }

}

export default App;