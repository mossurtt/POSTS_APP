import './index.css';
import * as React from 'react';
import RootNavigator from './navigation/RootNavigator';
import { ScoreProvider } from './contexts/ScoreContext';
import { PostProvider } from './contexts/PostContext';

function App() {
  return (
    <React.StrictMode>
      <PostProvider>
        <ScoreProvider>
          <RootNavigator />
        </ScoreProvider>
      </PostProvider>
    </React.StrictMode>
  );
}
export default App;
