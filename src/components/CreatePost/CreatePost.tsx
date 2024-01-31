import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';
import Card from '../Card/Card';
import PostProps from '../Post/Post.types';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import { usePost } from '../../contexts/PostContext/PostContext';
import { PostFormData, PostSchema } from '../Post/PostSchema';

function CreatePostForm(post: PostProps) {
  const { addPost } = usePost();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(PostSchema),
  });

  const navigate = useNavigate();

  const handleOnSave = async (data: Pick<PostProps, 'title' | 'content'>) => {
    const newPost: PostProps = {
      id: post.id,
      avatarUrl: post.avatarUrl,
      canRate: post.canRate,
      editable: post.editable,
      createdAt: post.createdAt,
      ...data,
    };

    try {
      setIsLoading(true);
      await addPost(newPost);
      navigate(-1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnCancel = () => {
    navigate(-1);
  };

  return (
    <Card isLoading={isLoading}>
      <div className="flex-row flex justify-center">
        <Avatar
          src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
          alt="avatar"
          size="48px"
        />
        <span className="text-2xl font-semibold m-2 pl-3 justify-end">
          {t('new-post')}
        </span>
      </div>
      <div>
        <input
          {...register('title')}
          id="title"
          className={twMerge(
            'm-4 p-2 border rounded-md w-11/12',
            errors.title?.message && 'placeholder-red-300',
          )}
          placeholder={
            (errors.title && `${t('title-error')}`) ?? `${t('title')}`
          }
        />
      </div>
      <div>
        <textarea
          {...register('content')}
          id="content"
          className={twMerge(
            'ml-4 p-2 h-48 border rounded-md w-11/12',
            errors.content?.message && 'placeholder-red-300',
          )}
          placeholder={
            (errors.content && `${t('content-error')}`) ?? `${t('content')}`
          }
        />
      </div>
      <div className="ml-4 mt-2 flex space-x-2">
        <div className="flex space-x-2">
          <Button
            onClick={handleSubmit(handleOnSave)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-emerald-500/50"
            title={t('save')}
          />
          <Button
            onClick={handleOnCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
            title={t('cancel')}
          />
        </div>
      </div>
    </Card>
  );
}

export default CreatePostForm;
