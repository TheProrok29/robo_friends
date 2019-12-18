import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField } from '../actions.js';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

const randomNumber = (min = 0, max = 100) => { // Random number <0-100>
    var randX = Math.floor(Math.random() * (max - min + 1)) + min;
    return randX;
}
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            randomNumber: randomNumber()
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { return response.json(); })
            .then(users => {
                this.setState({ robots: users })
            })
    }

    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ?
            <h1>Loading...</h1> :
            (
                <Fragment>
                    <header className='tc'>
                        <h1 className='f1'>RoboFriends</h1>
                        <SearchBox searchChange={onSearchChange} />
                    </header>
                    <main className='tc'>
                        <Scroll>
                            <ErrorBoundry>
                                <CardList robots={filteredRobots} randomNumber={this.state.randomNumber} />
                            </ErrorBoundry>
                        </Scroll>
                    </main>
                </Fragment >
            );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);