import { Box, Button, TextareaAutosize, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const AddEditTodoForm = ({
  id,
  description,
  error,
  title,
  setDescription,
  setTitle,
  handleSubmit,
}) => {
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column">
        <TextField
          className={classes.formField}
          error={!!error}
          defaultValue={title}
          fullWidth
          helperText={error}
          label="Todo Title"
          margin="normal"
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
        />
        <TextareaAutosize
          className={classes.textArea}
          aria-label="todoDescription"
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Todo Description"
          rowsMax={4}
        />
        <Button
          className={classes.formField}
          color="primary"
          fullWidth
          // theme={theme}
          type="submit"
          variant="contained"
        >
          {id ? "Save" : "Add"}
        </Button>
      </Box>
    </form>
  );
};

const useStyles = makeStyles((theme) => ({
  formField: {
    marginTop: "16px",
  },
  textArea: {
    backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.divider,
    color: theme.palette.white,
    fontSize: "14px",
  },
}));
