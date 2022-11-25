import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './Header';
import { RepoPage } from './repoPage/RepoPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <RepoPage />
    </QueryClientProvider>
  );
}

export default App;
