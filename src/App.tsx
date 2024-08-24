import Header from "./components/Header";
import GlobalProvider from "./providers";

function App() {
  return (
    <GlobalProvider>
      <Header title="Caju Front Teste" />
    </GlobalProvider>
  );
}

export default App;
