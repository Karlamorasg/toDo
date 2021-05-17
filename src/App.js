import React from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import { TodoList } from "./components/TodoList";

function App() {
	return (
		<Layout className="App">
			<TodoList />
		</Layout>
	);
}

export default App;
