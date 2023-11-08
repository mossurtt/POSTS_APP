import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import RootNavigator from './navigation/RootNavigator';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootNavigator />
  </React.StrictMode>,
);
