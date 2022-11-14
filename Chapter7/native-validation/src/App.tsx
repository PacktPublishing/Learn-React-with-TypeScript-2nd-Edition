import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ContactPage, contactPageAction } from './ContactPage';
import { ThankYouPage } from './ThankYouPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="contact" />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
    action: contactPageAction,
  },
  {
    path: '/thank-you/:name',
    element: <ThankYouPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
