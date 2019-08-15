import React from "react";

export function Navbar(props) {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<a class="navbar-brand text-light" href="#">
				Start Bootstrap
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon" />
			</button>
			<div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active">
						<a class="nav-link" href="#">
							Home <span class="sr-only">(current)</span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							About
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Services
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
