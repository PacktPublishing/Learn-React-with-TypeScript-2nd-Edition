import { createBrowserRouter, RouterProvider, defer } from 'react-router-dom';
import { PostsPage } from './posts/PostsPage';
import { getPosts } from './posts/getPosts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PostsPage />,
    loader: async () => defer({ posts: getPosts() }),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
