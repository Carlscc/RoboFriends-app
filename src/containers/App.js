import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/Search/Searchbox';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots(dispatch))
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
    }
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }


  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    //filters the robots, coneverts all characters to lower case, returns boolean based on if the string includes the string passed
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !isPending ?
      <h1>Loading</h1> :
      (
        <div className='App'>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
         <CardList robots={filteredRobots} />
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);