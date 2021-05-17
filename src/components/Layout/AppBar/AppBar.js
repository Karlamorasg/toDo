import { makeStyles } from "@material-ui/core/styles";
import {
	AppBar as MuiAppBar,
	Toolbar,
	Typography,
	IconButton,
} from "@material-ui/core";
import BaseIcon from "../../BaseIcon";
import { Tooltip } from "../../../components/Tooltip";
import { Popover } from "../../../components/Popover";

export const AppBar = ({ anchorEl, setAnchorEl, handleAdd }) => {
	const classes = useStyles();
	return (
		<MuiAppBar className={classes.appBar} position="fixed">
			<Toolbar className={classes.toolbar}>
				<Typography className={classes.title} variant="h6">
					Todo App
				</Typography>
				<Tooltip title="Add Todo">
					<IconButton
						edge="end"
						color="default"
						aria-label="add"
						onClick={handleAdd}						
					>					
						<BaseIcon icon="plus" size="default" />
					</IconButton>
				</Tooltip>
				<Popover anchor={anchorEl} setAnchor={setAnchorEl} />
			</Toolbar>
		</MuiAppBar>
	);
};

const useStyles = makeStyles((theme) => ({
	appBar: {
		...theme.mixins.toolbar,
	},
	toolbar: {
		width: "100%",
	},
	title: {
		flexGrow: 1,
	},
}));
