import React from "react";

import { Navbar } from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import { Cards } from "./cards.js";
import { Footer } from "./footer.js";

export function Home(props) {
	return (
		<div>
			<Navbar />

			<div className="container">
				<Jumbotron />
				<Cards />
			</div>

			<Footer />
		</div>
	);
}
