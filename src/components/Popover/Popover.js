import { Popover as MuiPopover } from "@material-ui/core";
import { AddEditTodoForm } from "../../components/AddEditTodoForm";

export const Popover = ({ anchor, todoInfo, handleClose, id, open }) => (
	<MuiPopover
		anchorEl={anchor}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		id={id}
		onClose={handleClose}
		open={open}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
	>
		<AddEditTodoForm
			id={todoInfo?.id}
			description={todoInfo?.description}
			handleClose={handleClose}
			title={todoInfo?.title}
		/>
	</MuiPopover>
);
