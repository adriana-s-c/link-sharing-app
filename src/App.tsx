import styles from "./App.scss";
import { Stack } from "./components/Stack";
import { HomePage } from "./pages/HomePage";
import { PreviewPage } from "./pages/PreviewPage";

function App() {
  return (
    // <Stack className="App" align="center" spacing="center">
    <Stack className={styles.App}>
      <HomePage />
      {/* <PreviewPage /> */}
    </Stack>
  );
}

export default App;
