import React, { Component } from "react";
import CardList from "../components/CardList";

import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";

// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			robots: [],
// 			searchTerm: "",
// 		};
// 	}

// 	componentDidMount() {
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((resp) => {
// 				return resp.json();
// 			})
// 			.then((users) => {
// 				this.setState({ robots: users });
// 			})
// 			.catch((err) => {
// 				console.log("Error with API", err.message);
// 			});
// 	}

// 	onSearchChange = (event) => {
// 		this.setState({ searchTerm: event.target.value });
// 	};

// 	render() {
// 		const filteredRobots = this.state.robots.filter((robot) => {
// 			return robot.name
// 				.toLowerCase()
// 				.includes(this.state.searchTerm.toLowerCase());
// 		});
// 		if (this.state.robots.length === 0) {
// 			return (
// 				<h1 className="f1 tc" style={{ color: "white" }}>
// 					Loading....
// 				</h1>
// 			);
// 		} else {
// 			return (
// 				<div className="tc">
// 					<h1 className="f1" style={{ color: "white" }}>
// 						RoboFriends
// 					</h1>
// 					<SearchBar
// 						searchTerm={this.state.searchTerm}
// 						onSearchChange={this.onSearchChange}
// 					/>
// 					<Scroll>
// 						<CardList robots={filteredRobots} />
// 					</Scroll>
// 				</div>
// 			);
// 		}
// 	}
// }

// export default App;
