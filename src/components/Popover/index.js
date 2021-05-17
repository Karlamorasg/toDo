import { useState, useEffect } from "react";
import { Popover as CustomPopover } from "./Popover";

export const Popover = ({ anchor, setAnchor, todoInfo }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	useEffect(() => {
		anchor ? setAnchorEl(anchor) : setAnchorEl(null);
		return () => {
			setAnchorEl(null);
		};
	}, [anchor]);

	const id = open ? "simple-popover" : undefined;

	const handleClose = () => {
		setAnchorEl(null);
		setAnchor(null);
	};

	return (
		<CustomPopover
			anchor={anchorEl}
			handleClose={handleClose}
			id={id}
			open={open}
			todoInfo={todoInfo}
		/>
	);
};
