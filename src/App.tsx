import styles from "./App.module.scss";
import { Stack } from "./components/Stack";
import { HomePage } from "./pages/HomePage";
import { PreviewPage } from "./pages/PreviewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EntryPage } from "./pages/LoginPage";
import { LoginForm } from "./pages/LoginPage/LoginForm";
import { CreateAccount } from "./pages/LoginPage/CreateAccount";
import { LinkCustomizer } from "./pages/HomePage/LinkCustomizer";
import { ProfileDetails } from "./pages/HomePage/ProfileDetails";
import { UserLinkDataProvider } from "./context";

function App() {
  return (
    <BrowserRouter>
      <UserLinkDataProvider>
        <Stack align="center" spacing="center" className={styles.box}>
          <Routes>
            <Route path="home" element={<HomePage />}>
              <Route index element={<LinkCustomizer />} />
              <Route path="profile" element={<ProfileDetails />} />
            </Route>
            <Route path="/" element={<EntryPage />}>
              <Route index element={<LoginForm />} />
              <Route path="createaccount" element={<CreateAccount />} />
            </Route>
            <Route path="/preview" element={<PreviewPage />} />
          </Routes>
        </Stack>
      </UserLinkDataProvider>
    </BrowserRouter>
  );
}

export default App;
