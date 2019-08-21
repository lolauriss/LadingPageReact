import React, { Fragment } from "react";

export function Footer(props) {
	return (
		<Fragment>
			<footer className="page-footer font-small bg-dark text-light">
				<div className="footer-copyright text-center py-3">
					© 2018 Copyright:
					<a href="https://mdbootstrap.com/education/bootstrap/">
						{" "}
						MDBootstrap.com
					</a>
				</div>
			</footer>
		</Fragment>
	);
}
