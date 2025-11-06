import { createBrowserRouter, Navigate } from 'react-router-dom';

import { App } from '../App';
import { DashboardPage } from '../pages/DashboardPage';
import { InvoiceListPage } from '../pages/InvoiceListPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />
      },
      {
        path: 'dashboard',
        element: <DashboardPage />
      },
      {
        path: 'invoices',
        element: <InvoiceListPage />
      }
    ]
  }
]);
