import { createBrowserRouter } from 'react-router-dom';
import { authRoutes } from './authRoutes';
import { lazy, Suspense } from 'react';

const App = lazy(() => import('../App'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
  },
  ...authRoutes,
]);

export default router;