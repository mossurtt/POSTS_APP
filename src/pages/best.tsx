import { useScore } from '../contexts/ScoreContext/ScoreContext';
import { usePost } from '../contexts/PostContext/PostContext';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import Post from '../components/Post/Post';
import DeleteModal from '../components/Modals/DeleteModal/DeleteModal';
import { useModal } from '../contexts/ModalContext/ModalContext';

function Best() {
  const { scores } = useScore();
  const { posts } = usePost();
  const { showModal } = useModal();
  const sortedPosts = [...(posts || [])];

  sortedPosts.sort((postA, postB) => {
    const scoresA = scores[postA.id] || { posScore: 0, negScore: 0 };
    const scoresB = scores[postB.id] || { posScore: 0, negScore: 0 };

    const averageScoreA = scoresA.posScore - scoresA.negScore;
    const averageScoreB = scoresB.posScore - scoresB.negScore;

    return averageScoreB - averageScoreA;
  });

  return (
    <PageWrapper>
      {!!sortedPosts?.length
        && sortedPosts.map((post) => (
          <Post {...post} key={post.id} canRate={false} editable={false} />
        ))}
      {showModal && <DeleteModal />}
    </PageWrapper>
  );
}

export default Best;
