import React from "react";

export default function todo({ todo, toggleTodo }) {
	function toggle() {
		toggleTodo(todo.id);
	}
	return (
		<div>
			<label>
				<input
					type="checkbox"
					checked={todo.complete}
					onChange={toggle}></input>
				{todo.name}
			</label>
		</div>
	);
}
