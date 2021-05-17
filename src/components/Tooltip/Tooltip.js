import MuiTooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

export const Tooltip = ({ title, children, ...props }) => (
	<CustomTooltip arrow placement="top" title={title} {...props}>
		{children}
	</CustomTooltip>
);

const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: theme.palette.primary.dark,
		fontSize: "0.875rem",
	},
	arrow: {
		color: theme.palette.primary.dark,
	},
}))(MuiTooltip);
