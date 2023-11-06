import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import Posts from './routes/posts';
import Best from './routes/best';
import { ScoreProvider } from './context/ScoreContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'posts',
    element: <Posts />,
  },
  {
    path: 'best',
    element: <Best />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScoreProvider>
      <RouterProvider router={router} />
    </ScoreProvider>
  </React.StrictMode>,
);
