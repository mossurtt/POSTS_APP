import './index.css';
import * as React from 'react';
import RootNavigator from './navigation/RootNavigator';
import { ScoreProvider } from './contexts/ScoreContext/ScoreContext';
import { PostProvider } from './contexts/PostContext/PostContext';
import { ModalProvider } from './contexts/ModalContext/ModalContext';

function App() {
  return (
    <React.StrictMode>
      <ModalProvider>
        <PostProvider>
          <ScoreProvider>
            <RootNavigator />
          </ScoreProvider>
        </PostProvider>
      </ModalProvider>
    </React.StrictMode>
  );
}
export default App;
