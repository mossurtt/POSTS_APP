import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import PostProps from '../components/Post/post.types';

type PostContextType = {
  posts: PostProps[] | null;
};

const PostContext = createContext<PostContextType>({
  posts: [],
});

type PostProviderProps = {
  children: ReactNode;
};

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<PostProps[] | null>(null);

  useEffect(() => {
    fetch('http://localhost:8000/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const contextValue = useMemo(() => {
    if (posts === null) {
      return { posts: [] };
    }

    return { posts };
  }, [posts]);

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
