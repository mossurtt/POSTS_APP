import { useScore } from '../contexts/ScoreContext/ScoreContext';
import { usePost } from '../contexts/PostContext/PostContext';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import PostList from '../components/PostList/PostList';

function Best() {
  const { scores } = useScore();
  const { posts } = usePost();

  const orderedPosts = [...(posts || [])];

  orderedPosts.sort((postA, postB) => {
    const scoresA = scores[postA.id] || { posScore: 0, negScore: 0 };
    const scoresB = scores[postB.id] || { posScore: 0, negScore: 0 };

    const totalScoreA = scoresA.posScore - scoresA.negScore;
    const totalScoreB = scoresB.posScore - scoresB.negScore;

    return totalScoreB - totalScoreA;
  });

  return (
    <PageWrapper>
      {!!orderedPosts?.length && (
        <PostList posts={orderedPosts} canRate={false} />
      )}
    </PageWrapper>
  );
}

export default Best;
