import { t } from 'i18next';
import { useModal } from '../../../contexts/ModalContext/ModalContext';
import { usePost } from '../../../contexts/PostContext/PostContext';
import Button from '../../Button/Button';
import BaseModal from '../BaseModal/BaseModal';

function DeleteModal() {
  const { selectedPost, deletePost } = usePost();
  const { setShowModal } = useModal();

  const onSubmit = () => {
    if (selectedPost) deletePost(selectedPost);
    setShowModal(false);
  };

  const onCancel = () => {
    setShowModal(false);
  };

  return (
    <BaseModal>
      <div className="flex flex-col place-content-between">
        <div className="mb-14 mt-10 text-xl font-semibold text-center ">
          {t('are-you-sure')}
        </div>
        <div className="">
          <Button
            className="bg-gray-400 text-black px-3 m-2 mr-5 ml-6 py-1 rounded-md hover:bg-red-400"
            onClick={onSubmit}
            title={t('yes-delete')}
          />
          <Button
            className="bg-gray-200 text-gray-700 px-3 m-2 py-1 rounded-md hover:bg-gray-300"
            onClick={onCancel}
            title={t('cancel')}
          />
        </div>
      </div>
    </BaseModal>
  );
}

export default DeleteModal;
