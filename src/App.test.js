import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { store } from "./store";
import App from "./App";

describe("App Component", function () {
  it("should render App", function () {
    let { getByText } = render(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Provider>
    );
    getByText("Watch Movie");
  });
});



