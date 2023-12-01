import styles from "./App.module.scss";
import { Stack } from "./components/Stack";
import { HomePage } from "./pages/HomePage";
import { PreviewPage } from "./pages/PreviewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EntryPage } from "./pages/login";
import { LoginForm } from "./pages/login/LoginForm";
import { CreateAccount } from "./pages/login/CreateAccount";

function App() {
  return (
    <BrowserRouter>
      <Stack align="center" spacing="center" className={styles.box}>
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="/" element={<EntryPage />}>
            <Route index element={<LoginForm />} />
            <Route path="createaccount" element={<CreateAccount />} />
          </Route>
          <Route path="/preview" element={<PreviewPage />} />
        </Routes>
      </Stack>
    </BrowserRouter>
  );
}

export default App;
