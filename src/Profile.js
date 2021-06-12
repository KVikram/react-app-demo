import React from "react";

export default function Profile({ match }) {
	const [user, setUser] = React.useState({});
	const fetchUser = async () => {
		const res = await fetch("https://reqres.in/api/users/" + match.params.id);
		const json = await res.json();
		setUser(json.data);
	};
	React.useEffect(() => {
		fetchUser();
	}, {});
	return (
		<div>
			<div className="profile">
				<p>
					<strong>
						{user.first_name} {user.last_name}
					</strong>
				</p>
				<p>{user.email}</p>
				<img alt="user" key={user.avatar} src={user.avatar} />
			</div>
		</div>
	);
}
