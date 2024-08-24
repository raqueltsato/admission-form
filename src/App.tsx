import Header from "./components/Header";
import Toast from "./components/Toast";
import GlobalProvider from "./providers";
import Router from "./router";

function App() {
  return (
    <GlobalProvider>
      <Header title="Caju Front Teste" />
      <Router />
      <Toast />
    </GlobalProvider>
  );
}

export default App;
