import './index.css';
import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import RootNavigator from './navigation/RootNavigator';
import { ScoreProvider } from './contexts/ScoreContext/ScoreContext';
import { PostProvider } from './contexts/PostContext/PostContext';
import { ModalProvider } from './contexts/ModalContext/ModalContext';

function App() {
  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <ModalProvider>
          <PostProvider>
            <ScoreProvider>
              <RootNavigator />
            </ScoreProvider>
          </PostProvider>
        </ModalProvider>
      </I18nextProvider>
    </React.StrictMode>
  );
}
export default App;
