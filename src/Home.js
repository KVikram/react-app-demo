import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	const [users, setUsers] = React.useState([]);
	const fetchUsers = async () => {
		const res = await fetch("https://reqres.in/api/users/");
		const json = await res.json();
		setUsers(json.data);
	};
	React.useEffect(() => {
		fetchUsers();
	}, []);
	return (
		<div>
			Hey Welcome to my React App
			<div className="users">
				{users.length &&
					users.map((user) => {
						return (
							<div key={user.id}>
								<p>
									<Link to={`/profile/${user.id}`}>
										<strong>{user.first_name}</strong>
									</Link>
								</p>
								<p>{user.email}</p>
								<img alt="user" key={user.avatar} src={user.avatar} />
							</div>
						);
					})}
			</div>
		</div>
	);
}
