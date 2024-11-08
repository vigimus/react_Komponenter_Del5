import React, { Component } from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import { robots } from './Robots';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [ ],
	        searchfield: ' '

		}
	} 

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users') 
	.then(response=> {
		return response.json();
	})	
	.then(users => {
		this.setState({ robots: robots});
	})
	
}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
        } 
	render() {
		const filteredRobots = this.state.robots.filter(robot => {
    	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

		return (
<div className='tc'>		
<h1 className='f1'>RoboFriends</h1>
<Scroll>
<SearchBox searchChange={this.onSearchChange}/>
</Scroll>
<CardList robots={filteredRobots} />
</div>
		);
}
	} 


export default App;