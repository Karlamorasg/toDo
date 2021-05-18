import { useState } from "react";
import { useDispatch } from "react-redux";
import { SingleTodo as Todo } from "./SingleTodo";
import { deleteTodo } from "store/todosReducer/actions";
import React, { useEffect } from "react";

export const SingleTodo = ({ ...props }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [gifLink, setGifLinks] = useState('');		

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};

	const handleEdit = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const GIFS = () => {
		  let apiKey = "jdA3MGgrJsecVcR8lKt3R6eLG51pwZ38";
		  let url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;  
		  fetch(url)
			.then((response) => response.json())		
			.then((data) => {
			  setGifLinks(data.data.images.original.url);
			});  
	}

	useEffect(() => {
		GIFS();
	  }, []); 

	  const handleOnclick = () => {
		GIFS();
	  };

	return (
		<Todo
			anchorEl={anchorEl}
			setAnchorEl={setAnchorEl}
			handleDelete={handleDelete}
			handleEdit={handleEdit}
			handleOnclick={handleOnclick}
			gifLink={gifLink}
			{...props}
		/>
	);
};
