import {
  createContext, useContext, useMemo, useState,
} from 'react';
import { ModalContextType, ModalProviderProps } from './ModalContext.types';

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

export function ModalProvider({ children }: ModalProviderProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const contextValue = useMemo<ModalContextType>(
    () => ({
      showModal,
      setShowModal,
    }),
    [showModal, setShowModal],
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ScoreProvider');
  }

  return context;
};
