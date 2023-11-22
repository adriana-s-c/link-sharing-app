import "./App.scss";
import { Stack } from "./components/Stack";
import { Login } from "./pages/login";

function App() {
  return (
    <Stack className="App" align="center" spacing="center">
      <Login />
    </Stack>
  );
}

export default App;
