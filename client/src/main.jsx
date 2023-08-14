import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import NextPage from './pages/NextPage';
import NotFound from './pages/NotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/NextPage',
        element: <NextPage />
      }, {
        path: '/Login',
        element: <Login />
      }, {
        path: '/SignUp',
        element: <SignUp />
      },
      {
        path: '*', // This is a catch-all route
        element: <NotFound />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
