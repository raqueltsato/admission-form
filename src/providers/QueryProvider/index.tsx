import { QueryClient, QueryClientProvider } from "react-query";
import { Props } from "../types";

const QueryProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export default QueryProvider;
