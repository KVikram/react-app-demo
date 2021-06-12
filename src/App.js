import "./App.css";
import TodoList from "./TodoList";
import { useState, useRef, useEffect } from "react";

const LOCAL_STORE_TODOS_KEY = "TODO_APP_TODOS_LIST";

function App() {
	const [todos, setTodos] = useState(creatList());
	const todoNameRef = useRef();

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORE_TODOS_KEY));
		if (storedTodos) setTodos(storedTodos);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORE_TODOS_KEY, JSON.stringify(todos));
		return () => {
			// cleanup
		};
	}, [todos]);

	function addTodo(e) {
		const name = todoNameRef.current.value;
		if (name === "") return;
		console.log(name);
		let todo = {
			id: new Date().getTime(),
			name: name,
			complete: false,
		};
		todoNameRef.current.value = null;
		setTodos((prevTodos) => {
			return [...prevTodos, todo];
		});
	}

	function onEnter(e) {
		if (e.key === "Enter") {
			addTodo(e);
		}
	}
	function toggleTodo(id) {
		const newTodos = [...todos];
		const todo = newTodos.find((todo) => todo.id === id);
		todo.complete = !todo.complete;
		setTodos(newTodos);
	}

	function clearTodo(id) {
		setTodos([]);
	}
	return (
		/* <div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React here
				</a>
			</header>
		</div> */
		<>
			<TodoList todos={todos} toggleTodo={toggleTodo} />
			<input type="text" ref={todoNameRef} onKeyUp={onEnter}></input>
			<button onClick={addTodo}>Add</button>
			<button onClick={clearTodo}>Clear</button>
			<div>
				{todos.filter((todo) => !todo.complete).length} Tasks left to do..
			</div>
		</>
	);
}

function creatList() {
	let list = [];

	for (let i = 0; i < 5; i++) {
		let todo = {
			id: i,
			name: "Todo" + i,
			complete: true,
		};
		list.push(todo);
	}
	return list;
}
export default App;
