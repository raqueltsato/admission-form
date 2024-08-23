import Header from "./components/Header";
import GlobalProvider from "./providers";

function App() {
  return (
    <GlobalProvider>
      <Header />
    </GlobalProvider>
  );
}

export default App;
