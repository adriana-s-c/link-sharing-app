import styles from "./App.scss";
import { Stack } from "./components/Stack";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    // <Stack className="App" align="center" spacing="center">
    <Stack className={styles.App}>
      <Stack>
        <HomePage />
      </Stack>
    </Stack>
  );
}

export default App;
