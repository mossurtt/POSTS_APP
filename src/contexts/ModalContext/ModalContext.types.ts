import { Dispatch, SetStateAction } from 'react';

export type ModalContextType = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export type ModalProviderProps = {
  children: React.ReactNode;
};
