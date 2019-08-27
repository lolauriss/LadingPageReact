import React, { Fragment } from "react";

export function Card(props) {
	let style = { width: "18rem" };
	return (
		<Fragment>
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<div className="card" style={style}>
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Find Out More!
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card" style={style}>
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Find Out More!
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card" style={style}>
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Find Out More!
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card" style={style}>
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Find Out More!
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
