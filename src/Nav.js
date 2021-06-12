import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
	const linkStyle = {
		color: "white",
	};
	return (
		<div>
			<nav>
				<ul className="nav-links">
					<Link style={linkStyle} to="/">
						<li>Home</li>
					</Link>
					<Link style={linkStyle} to="/tasks">
						<li>Tasks</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
}
