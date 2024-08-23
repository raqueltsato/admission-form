import Header from "./components/Header";
import GlobalProvider from "./providers";

function App() {
  return (
    <GlobalProvider>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
    </GlobalProvider>
  );
}

export default App;
