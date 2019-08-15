import React from "react";

import { Navbar } from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

export function Home(props) {
	return (
		<div>
			<Navbar />

			<div className="container">
				<Jumbotron />
				<Card />
			</div>

			<Footer />
		</div>
	);
}
