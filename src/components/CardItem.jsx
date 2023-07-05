import React from "react";

const CardItem = ({ robot }) => {
	return (
		<div className="bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5">
			<img
				src={`https://robohash.org/${robot.id}?200x200`}
				alt="roboots"
			/>
			<div>
				<h2>{robot.name}</h2>
				<p>{robot.email}</p>
			</div>
		</div>
	);
};

export default CardItem;
