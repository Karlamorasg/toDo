import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../theme";
import { store } from "../../store";
import TodoList from "./TodoList";

const items = [
  {
    title: "Watch Movie",
    description: "Go find some good movie to watch",
    id: 1,
  },
  {
    title: "Cut Nails",
    description: "Search the nail cutter and cut my nails",
    id: 2,
  },
  {
    title: "Take Bath",
    description: "Get into the bath and take a shower",
    id: 3,
  },
];

describe("App Component", function () {
  it("should render TodoList with the correct information", function () {
    const { getByText } = render(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <TodoList todoList={items} />
        </MuiThemeProvider>
      </Provider>
    );

    getByText("Watch Movie"); //First title
    getByText("Go find some good movie to watch"); //First description

    getByText("Cut Nails"); //Second title
    getByText("Search the nail cutter and cut my nails"); //Second description

    getByText("Take Bath"); //Third title
    getByText("Get into the bath and take a shower"); //Third description
  });

  it("should works correctly the delete and edit button", async function () {
    const { getAllByTitle, findByText, getByText } = render(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <TodoList todoList={items} />
        </MuiThemeProvider>
      </Provider>
    );

    const editButtons = getAllByTitle("Edit Todo");
    const deleteButtons = getAllByTitle("Delete Todo");

    expect(editButtons).toHaveLength(3);
    expect(deleteButtons).toHaveLength(3);

    fireEvent.click(editButtons[0]);

    const wrapperInput = document.getElementsByClassName(
      "MuiInputBase-formControl"
    );

    //Update title
    fireEvent.change(wrapperInput[0].children[0], {
      target: { value: "Movieee" },
    });

    //Save it

    fireEvent.click(getByText("Save").parentElement);
  });
});
