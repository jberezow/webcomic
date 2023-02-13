import React from "react";

import "./App.css";
import { Comic } from "./comic";
import { Banner } from "./banner";
import { AppContainer } from "./StyledDivs";

import banner from "./assets/banner.png";
import yellowBuckets from "./assets/comics/images/yellowBuckets.png";

// import comicList from "./comicList";

const App: React.FC = () => {
	return (
		<AppContainer>
			<Banner image={banner} alt="Pucks to the Net" />
			<Comic
				image={yellowBuckets}
				alt="Weber Smash"
				caption="The Predators incite controversy by electing to swap navy blue helmets for golden."
			/>
		</AppContainer>
	);
};

export default App;
