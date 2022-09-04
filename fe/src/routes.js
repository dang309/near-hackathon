import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import HomePage from './pages/Home';
import Login from './pages/Login';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [{ path: '/home', element: <HomePage /> }],
    },
    {
      path: 'login',
      element: <Login />,
    },

    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
