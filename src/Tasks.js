import React from "react";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { Button } from "@material-ui/core";
import { Icon, TextField } from "@material-ui/core";

const LOCAL_STORE_TODOS_KEY = "TODO_APP_TODOS_LIST";

export default function Tasks() {
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
		if (name === "" || name == null) return;
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
		<div>
			<TodoList todos={todos} toggleTodo={toggleTodo} />
			{/* <input type="text" ref={todoNameRef} onKeyUp={onEnter}></input> */}
			<TextField
				id="outlined-basic"
				type="text"
				label="Task"
				variant="outlined"
				inputRef={todoNameRef}
				onKeyUp={onEnter}
			/>
			{/* <button onClick={addTodo}>Add</button>
			<button onClick={clearTodo}>Clear</button> */}
			<Button variant="contained" color="primary" onClick={addTodo}>
				Add
			</Button>
			<Button
				variant="contained"
				color="secondary"
				onClick={clearTodo}
				startIcon={<Icon>delete</Icon>}>
				Clear
			</Button>

			<div>
				{todos.filter((todo) => !todo.complete).length} Tasks left to do..
			</div>
		</div>
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
