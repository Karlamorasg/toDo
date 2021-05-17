import { CssBaseline, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "./AppBar";

export const Layout = ({ children }) => {
	const classes = useStyles();
	return (
		<Grid container>
			<CssBaseline />
			<AppBar />
			<Grid container className={classes.main} component="main">
				<Grid item className={classes.contentHeader} xs={12} />
				<Grid item xs={12}>
					<Paper className={classes.container} elevation={4}>
						{children}
					</Paper>
				</Grid>
			</Grid>
		</Grid>
	);
};

const useStyles = makeStyles((theme) => ({
	contentHeader: {
		...theme.mixins.toolbar,
	},
	main: {
		flexGrow: 1,
		maxWidth: "100%",
		margin: theme.spacing(0.5, 0.5),
	},
	container: {
		margin: theme.spacing(1),
		padding: theme.spacing(1),
	},
}));
