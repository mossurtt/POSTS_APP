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

  const orderPosts = [...(posts || [])];

  orderPosts.sort((postA, postB) => {
    const scoresA = scores[postA.id] || { posScore: 0, negScore: 0 };
    const scoresB = scores[postB.id] || { posScore: 0, negScore: 0 };

    const totalScoreA = scoresA.posScore - scoresA.negScore;
    const totalScoreB = scoresB.posScore - scoresB.negScore;

    return totalScoreB - totalScoreA;
  });

  return (
    <PageWrapper>
      {!!orderPosts?.length
        && orderPosts.map((post) => (
          <Post {...post} key={post.id} canRate={false} editable={false} />
        ))}
      {showModal && <DeleteModal />}
    </PageWrapper>
  );
}

export default Best;
