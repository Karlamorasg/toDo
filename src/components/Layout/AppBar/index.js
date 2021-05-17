import { useState } from "react";
import { AppBar as TodoAppBar } from "./AppBar";

export const AppBar = ({ ...props }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleAdd = (event) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<TodoAppBar
			anchorEl={anchorEl}
			setAnchorEl={setAnchorEl}
			handleAdd={handleAdd}
			{...props}
		/>
	);
};
