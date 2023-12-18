import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Card from '../Card/Card';
import PostProps from '../Post/post.types';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import { usePost } from '../../contexts/PostContext/PostContext';
import { PostFormData, PostSchema } from '../Post/postSchema';

function CreatePostForm(post: PostProps) {
  const { addPost } = usePost();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(PostSchema),
  });

  const navigate = useNavigate();

  const handleOnSave: SubmitHandler<
  Pick<PostProps, 'title' | 'content'>
  > = async (data) => {
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
    <Card>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex-row flex justify-center">
            <Avatar src={post.avatarUrl} alt="avatar" size="48px" />
            <span className="text-2xl font-semibold m-2 pl-3 justify-end">
              New post
            </span>
          </div>
          <div>
            {errors.title ? (
              <input
                {...register('title')}
                id="title"
                className="m-4 p-2 border rounded-md w-11/12 placeholder-red-500"
                placeholder={errors.title?.message}
              />
            ) : (
              <input
                {...register('title')}
                id="title"
                className="m-4 p-2 border rounded-md w-11/12"
                placeholder="title"
              />
            )}
          </div>
          <div>
            {errors.content ? (
              <textarea
                {...register('content')}
                id="content"
                className="ml-4 p-2 border rounded-md w-11/12
                h-48 placeholder-red-500 font-normal"
                placeholder={errors.content?.message}
              />
            ) : (
              <textarea
                {...register('content')}
                id="content"
                className="ml-4 p-2 border rounded-md w-11/12
                h-48 font-normal"
                placeholder="content"
              />
            )}
          </div>
          <div className="mt-4 flex justify-start space-x-2">
            <div className="flex space-x-2">
              <Button
                onClick={handleSubmit(handleOnSave)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-emerald-500/50"
                title="Save"
              />
              <Button
                onClick={handleOnCancel}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                title="Cancel"
              />
            </div>
          </div>
        </>
      )}
    </Card>
  );
}

export default CreatePostForm;
