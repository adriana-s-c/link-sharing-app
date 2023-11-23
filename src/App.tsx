import "./App.scss";
import { Stack } from "./components/Stack";
import { EntryPage } from "./pages/login";

function App() {
  return (
    <Stack className="App" align="center" spacing="center">
      <Stack>
        <EntryPage />
      </Stack>
    </Stack>
  );
}

export default App;
