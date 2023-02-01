import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Comic } from "./comic";
import yellowBuckets from "./assets/comics/images/yellowBuckets.png";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Comic
					image={yellowBuckets}
					alt="Weber Smash"
					caption="The Predators incite controversy by electing to swap navy blue helmets for golden."
				/>
			</header>
		</div>
	);
}

export default App;
