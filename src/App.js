import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';


const randomNumber = (min = 0, max = 100) => { // Random number <0-100>
    var randX = Math.floor(Math.random() * (max - min + 1)) + min;
    return randX;
}
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: '',
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

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <Fragment>
                    <header className='tc'>
                        <h1 className='f1'>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                    </header>
                    <main className='tc'>
                        <CardList robots={filteredRobots} randomNumber={this.state.randomNumber} />
                    </main>
                </Fragment >
            );
        }
    }
}

export default App;