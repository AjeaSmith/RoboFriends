import React, { useState, useEffect } from "react";

import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";

const App = () => {
	const [robots, setRobots] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const onSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};
	const filteredRobots = robots.filter((robot) => {
		return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
	});

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((resp) => {
				return resp.json();
			})
			.then((users) => {
				setRobots(users);
			})
			.catch((err) => {
				console.log("Error with API", err.message);
			});
	}, []);

	return (
		<div>
			{/* Error boundary goes here... */}
			{robots.length === 0 ? (
				<h1 className="f1 tc" style={{ color: "white" }}>
					Loading....
				</h1>
			) : (
				<div className="tc">
					<h1 className="f1" style={{ color: "white" }}>
						RoboFriends
					</h1>
					<SearchBar
						searchTerm={searchTerm}
						onSearchChange={onSearchChange}
					/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			)}
		</div>
	);
};

export default App;
