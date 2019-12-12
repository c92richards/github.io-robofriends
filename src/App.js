import React, { Component } from 'react';
import CardList  from './CardList';
import Searchbox from './Searchbox';
import {robots} from './robots';
import Scroll from './Scroll';
import Particle from './Particle';

import './App.css';



 


class App  extends Component   {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield:""
		}
	}

	componentDidMount(){
		   this.setState({ robots: robots })
	}



	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		
	}
	render(){
		const { robots, searchfield } = this.state
		const filteredRobots = robots.filter(robot => {
		 return robots.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		if (this.state.robots.length === 0){
			return <h1>Loading</h1>
		}else {

			return (
				<div className='tc'>
				    <div>
				     <Particle />
				    </div>
			        <h1 className='f1'>RoboFriends</h1>
			        <Searchbox searchChange={this.onSearchChange}/>
			        <Scroll>
					 <CardList robots={filteredRobots}/>
					</Scroll>
					
				</div>
			);
		}
	}
	
}


export default App;