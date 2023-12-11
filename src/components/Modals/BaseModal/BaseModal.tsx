import * as ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { BaseModalProps } from './BaseModal.types';

const BaseModal = ({ children }: BaseModalProps) => {
  useEffect(() => {
    const { body } = document;
    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = '';
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="flex flex-col bg-zinc-700/50 top-0 fixed items-center justify-center w-full h-full">
      <div className="w-64 h-48 items-center justify-center border rounded-lg p-4 m-4 flex flex-col relative bg-slate-50">
        {children}
      </div>
    </div>,
    document.querySelector('#modal')!,
  );
};
export default BaseModal;
