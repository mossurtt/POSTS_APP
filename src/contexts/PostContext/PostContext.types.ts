import { ReactNode } from 'react';
import PostProps from '../../components/Post/post.types';

export type PostContextType = {
  posts: PostProps[] | null;
  updatePost: (postToUpdate: PostProps) => Promise<PostProps | undefined>;
  deletePost: (postToDelete: PostProps) => Promise<void>;
  setSelectedPost: (post: PostProps) => void;
  selectedPost: null | PostProps;
};

export type PostProviderProps = {
  children: ReactNode;
};
