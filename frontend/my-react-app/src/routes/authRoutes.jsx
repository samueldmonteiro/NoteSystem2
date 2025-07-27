import { lazy } from 'react';
const LoginPage = lazy(() => import('../pages/auth/LoginPage'));

export const authRoutes = [
  {
    path: '/login',
    element: <LoginPage/>,
  }
];