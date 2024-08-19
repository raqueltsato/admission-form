import Router from "~/router";
import { Header } from "./components/Header";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header>
          <h1>Caju Front Teste</h1>
        </Header>
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
