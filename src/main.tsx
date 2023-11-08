import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import RootNavigator from './navigation/RootNavigator';
import { ScoreProvider } from './context/ScoreContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScoreProvider>
      <RootNavigator />
    </ScoreProvider>
  </React.StrictMode>,
);
