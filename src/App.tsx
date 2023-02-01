import React from "react";

import "./App.css";
import { Comic } from "./comic";
import yellowBuckets from "./assets/comics/images/yellowBuckets.png";

// Styles
import { MainTitle } from "./StyledDivs";

const App: React.FC = () => {
	return (
		<header>
			<div>
				<MainTitle>Pucks to the Net</MainTitle>
			</div>
			<Comic
				image={yellowBuckets}
				alt="Weber Smash"
				caption="The Predators incite controversy by electing to swap navy blue helmets for golden."
			/>
		</header>
	);
};

export default App;
