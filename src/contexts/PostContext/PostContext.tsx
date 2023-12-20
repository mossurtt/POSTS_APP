import {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import PostProps from '../../components/Post/Post.types';
import { PostContextType, PostProviderProps } from './PostContext.types';
import { RecentlyCreatedPostProps } from '../../components/CreatePost/CreatePost.types';
import { validatePostFormData } from '../../components/Post/PostSchema';

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

  const deletePost = async (deletedPost: PostProps): Promise<void> => {
    try {
      const res = await fetch(`http://localhost:8000/posts/${deletedPost.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(deletedPost),
      });

      if (res.ok) {
        setPosts(posts.filter((post) => post.id !== deletedPost.id));
      } else throw new Error('Invalid response');
    } catch (e) {
      console.error(e);
    }
  };

  const addPost = async ({
    title,
    content,
  }: Pick<PostProps, 'title' | 'content'>): Promise<PostProps> => {
    const post: RecentlyCreatedPostProps = {
      title,
      content,
      createdAt: new Date().toISOString(),
      avatarUrl: 'https://cdn-icons-png.flaticon.com/512/3607/3607444.png',
    };

    const res = await fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });

    if (!res.ok) {
      throw new Error("Couldn't add post");
    }

    const recentlyCreatedPost: PostProps = await res.json();

    if (!recentlyCreatedPost.id) {
      throw new Error('Incorrect json response');
    }

    validatePostFormData(recentlyCreatedPost);

    try {
      setPosts((prevState) => [...prevState, recentlyCreatedPost]);
    } catch (e) {
      console.log(e);
    }

    return recentlyCreatedPost;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = useMemo<PostContextType>(
    () => ({
      posts,
      selectedPost,
      updatePost,
      deletePost,
      addPost,
      setSelectedPost: (post) => setSelectedPost(post),
    }),
    [updatePost, deletePost, posts, selectedPost],
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
