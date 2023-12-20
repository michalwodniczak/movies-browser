import { ThemeProvider } from "styled-components";
import { theme } from "./app/theme";
import { GlobalStyle } from "./app/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <header>
        <h1>Movie Browser</h1>
      </header>
    </ThemeProvider>
  )
}

export default App;
