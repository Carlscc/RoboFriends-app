import React, { Component } from 'react';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/Search/Searchbox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  //uses Lifecycle method to fetch the users URL
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      //coverts the response to JSON format
      .then(response=> response.json())
      //returns as a new promise as the body, sets the robots from the array
      .then(users => {this.setState({ robots: users})});
  }

  onSearchChange = (event) => {
    //calls the searchfield event value
    this.setState({ searchfield: event.target.value })
  }

  render() {
    //pull the robots and searchfield values from the state object (destructuring)
    const { robots, searchfield } = this.state;
    //filters the robots, coneverts all characters to lower case, returns boolean based on if the string includes the string passed
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='App'>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
           <CardList robots={filteredRobots} />
        </div>
      );
  }
}

export default App;