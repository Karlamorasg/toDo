import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./actionTypes";

export const addTodo = (newTodo) => ({
	type: ADD_TODO,
	payload: { ...newTodo },
});
export const updateTodo = (updatedTodo) => ({
	type: UPDATE_TODO,
	payload: { ...updatedTodo },
});
export const deleteTodo = (todoId) => ({
	type: DELETE_TODO,
	payload: todoId,
});
