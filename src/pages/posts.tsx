import PostList from '../components/PostList/PostList';
import { usePost } from '../contexts/PostContext/PostContext';
import PageWrapper from '../components/PageWrapper/PageWrapper';

function Posts() {
  const { posts } = usePost();

  return (
    <PageWrapper>{!!posts?.length && <PostList posts={posts} />}</PageWrapper>
  );
}

export default Posts;
