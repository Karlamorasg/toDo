import { useState } from "react";
import { useDispatch } from "react-redux";
import { SingleTodo as Todo } from "./SingleTodo";
import { deleteTodo } from "store/todosReducer/actions";

export const SingleTodo = ({ ...props }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};

	const handleEdit = (event) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<Todo
			anchorEl={anchorEl}
			setAnchorEl={setAnchorEl}
			handleDelete={handleDelete}
			handleEdit={handleEdit}
			{...props}
		/>
	);
};
