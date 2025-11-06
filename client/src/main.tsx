import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppProvider } from './providers/AppProvider';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);
