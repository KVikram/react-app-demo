import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import Tasks from "./Tasks";
import Profile from "./Profile";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/tasks" component={Tasks} />
					<Route path="/profile/:id" component={Profile} />
					{/* <Home />
				<Tasks /> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
