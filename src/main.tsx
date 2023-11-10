import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import RootNavigator from './navigation/RootNavigator';
import { ScoreProvider } from './contexts/ScoreContext';
import { PostProvider } from './contexts/PostContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostProvider>
      <ScoreProvider>
        <RootNavigator />
      </ScoreProvider>
    </PostProvider>
  </React.StrictMode>,
);
