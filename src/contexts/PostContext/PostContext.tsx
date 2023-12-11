import {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import PostProps from '../../components/Post/post.types';
import { PostContextType, PostProviderProps } from './PostContext.types';

const PostContext = createContext<PostContextType>({} as PostContextType);

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [selectedPost, setSelectedPost] = useState<PostProps | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:8000/posts');
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const updatePost = async (
    updatedPost: PostProps,
  ): Promise<PostProps | undefined> => {
    try {
      const res = await fetch(`http://localhost:8000/posts/${updatedPost.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPost),
      });
      const postFromResponse: PostProps = await res.json();

      if (!postFromResponse?.id) {
        throw new Error('Invalid response');
      }

      const copy = [...posts];
      const foundIdx = copy.findIndex(({ id }) => id === postFromResponse.id);
      copy[foundIdx] = postFromResponse;

      setPosts(copy);

      return postFromResponse;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = useMemo<PostContextType>(
    () => ({
      posts,
      selectedPost,
      updatePost,
      setSelectedPost: (post) => setSelectedPost(post),
    }),
    [updatePost, posts, selectedPost],
  );

  return (
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  );
}

export const usePost = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('usePost must be used within a PostProvider');
  }

  return context;
};
