import {
	IconButton,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	Typography,
} from "@material-ui/core";
import BaseIcon from "../../../components/BaseIcon";
import { Tooltip } from "../../../components/Tooltip";
import { Popover } from "../../../components/Popover";

export const SingleTodo = ({
	anchorEl,
	setAnchorEl,
	id,
	title,
	description,
	handleEdit,
	handleDelete,
}) => {
	return (
		<ListItem divider>
			<ListItemText>
				<Typography variant="subtitle1">{title}</Typography>
				<Typography variant="caption">{description}</Typography>
			</ListItemText>
			<ListItemSecondaryAction>
				<Tooltip title="Edit Todo">
					<IconButton aria-label="edit" onClick={handleEdit}>
						<BaseIcon color="secondary" icon="pen" />
					</IconButton>
				</Tooltip>
				<Popover
					anchor={anchorEl}
					setAnchor={setAnchorEl}
					todoInfo={{ id, description, title }}
				/>
				<Tooltip title="Delete Todo">
					<IconButton aria-label="delete" onClick={() => handleDelete(id)}>
						<BaseIcon color="error" icon="trash" />
					</IconButton>
				</Tooltip>
			</ListItemSecondaryAction>
		</ListItem>
	);
};
