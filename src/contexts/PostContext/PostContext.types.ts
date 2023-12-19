import { Dispatch, ReactNode, SetStateAction } from 'react';
import PostProps from '../../components/Post/Post.types';

export type PostContextType = {
  posts: PostProps[] | null;
  updatePost: (postToUpdate: PostProps) => Promise<PostProps | undefined>;
  deletePost: (postToDelete: PostProps) => Promise<void>;
  setSelectedPost: (post: PostProps) => void;
  selectedPost: null | PostProps;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export type PostProviderProps = {
  children: ReactNode;
};
