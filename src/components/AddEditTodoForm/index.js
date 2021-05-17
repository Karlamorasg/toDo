import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddEditTodoForm as TodoForm } from "./AddEditTodoForm";
import { addTodo, updateTodo } from "store/todosReducer/actions";

export const AddEditTodoForm = ({ description, handleClose, id, title }) => {
	const dispatch = useDispatch();
	const [todoTitle, setTodoTitle] = useState(title);
	const [todoDescription, setTodoDescription] = useState(description);
	const [error, setError] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (todoTitle) {
			if (id) {
				dispatch(
					updateTodo({ id, title: todoTitle, description: todoDescription })
				);
			} else
				dispatch(addTodo({ title: todoTitle, description: todoDescription }));
			handleClose();
		} else setError("Todo title is required");
	};
	return (
		<TodoForm 
			id={id}
			description={description}
			error={error}
			title={title}
			setDescription={setTodoDescription}
			setTitle={setTodoTitle}
			handleSubmit={handleSubmit}
		/> 
	);
};
