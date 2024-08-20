import Router from "~/router";
import { Header } from "./components/Header";
import GlobalProvider from "./providers";

function App() {
  return (
    <GlobalProvider>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <Router />
    </GlobalProvider>
  );
}

export default App;
