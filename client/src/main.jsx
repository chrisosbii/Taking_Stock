import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import NextPage from './pages/NextPage';
import NotFound from './pages/NotFound';
import { element } from 'prop-types';
import UserProfile from './pages/UserProfile.jsx';
// import UserProfile from './pages/UserProfile.jsx';
import './App.css'

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
        path: '/UserProfile',
        element: <UserProfile />
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
