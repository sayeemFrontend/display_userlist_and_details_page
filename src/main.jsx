import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './router';
import Loader from './components/common/suspender/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Suspense fallback={<Loader />}>
    <RouterProvider router={routes} />
  </React.Suspense>
);
