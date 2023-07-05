import React from "react";
import CardItem from "./CardItem";

const CardList = ({ robots }) => {
	return (
		<div>
			{robots.map((robot, i) => {
				return <CardItem key={i} robot={robot} />;
			})}
		</div>
	);
};

export default CardList;
