import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from '../app/store';
import { router } from '../routes/router';

export const AppProvider = (): JSX.Element => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
