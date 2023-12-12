import { useScore } from '../contexts/ScoreContext/ScoreContext';
import { usePost } from '../contexts/PostContext/PostContext';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import PostList from '../components/PostList/PostList';

function Best() {
  const { scores } = useScore();
  const { posts } = usePost();

  const sortedPosts = [...(posts || [])];

  sortedPosts.sort((postA, postB) => {
    const scoreA = (scores[postA.id] || { posScore: 0, negScore: 0 }).posScore;
    const scoreB = (scores[postB.id] || { posScore: 0, negScore: 0 }).posScore;
    return scoreB - scoreA;
  });

  return (
    <PageWrapper>
      {!!posts?.length && <PostList posts={sortedPosts} />}
    </PageWrapper>
  );
}

export default Best;
