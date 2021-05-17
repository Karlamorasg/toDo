import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./actionTypes";

const initialState = {
	todos: [
		{
			title: "Watch Movie",
			description: "Go find some good movie to watch",
			id: 1,
		},
		{
			title: "Cut Nails",
			description: "Search the nail cutter and cut my nails",
			id: 2,
		},
		{
			title: "Take Bath",
			description: "Get into the bath and take a shower",
			id: 3,
		},
	],
	lastId: 3,
};

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO: {
			return {
				...state,
				todos: [...state.todos, { ...action.payload, id: state.lastId + 1 }],
				lastId: state.lastId + 1,
			};
		}
		case UPDATE_TODO: {
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id === action.payload.id) {
						todo.title = action.payload.title;
						todo.description = action.payload.description;
					}
					return todo;
				}),
			};
		}
		case DELETE_TODO: {
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		}
		
		default:
			return state;
	}
};
