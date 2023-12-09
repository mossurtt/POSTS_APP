import PostList from '../components/PostList/PostList';
import { usePost } from '../contexts/PostContext/PostContext';
import PageWrapper from '../components/PageWrapper/PageWrapper';

function Posts() {
  const { posts } = usePost();

  return (
    <div className="min-h-screen bg-[#82d6ca]">
      <PageWrapper>{!!posts?.length && <PostList posts={posts} />}</PageWrapper>
    </div>
  );
}

export default Posts;
