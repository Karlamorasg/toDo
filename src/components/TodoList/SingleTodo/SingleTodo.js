import {
	IconButton,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	Typography,
	Avatar
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
	gifLink,
	handleOnclick
}) => {


	const titleGif = title;
	function getWord(words) {
		var n = words.split(" ");
		return n[n.length - 1];
	}	
	const wordFinal = getWord(titleGif)
	const urlFinal = `${gifLink}&tag=${wordFinal}`
	

	return (
		<ListItem divider>
			<ListItemText>
				<Typography variant="subtitle1">{title}</Typography> 
				<ListItem>
				<Avatar alt="gif" src={urlFinal} variant="square"></Avatar>	
				<Tooltip title="Change Gif">
				<IconButton aria-label="change" onClick={handleOnclick}>
						<BaseIcon color="secondary" icon="another"/>
				</IconButton>
				</Tooltip>
				</ListItem>
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
