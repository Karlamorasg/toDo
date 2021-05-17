import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { todosReducer } from "./todosReducer";

export const store = createStore(todosReducer, composeWithDevTools());
