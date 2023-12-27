import { useScore } from '../contexts/ScoreContext/ScoreContext';
import { usePost } from '../contexts/PostContext/PostContext';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import DeleteModal from '../components/Modals/DeleteModal/DeleteModal';
import { useModal } from '../contexts/ModalContext/ModalContext';
import PostList from '../components/PostList/PostList';

function Best() {
  const { scores } = useScore();
  const { posts } = usePost();
  const { showModal } = useModal();
  const sortedPosts = [...(posts || [])];

  sortedPosts.sort((postA, postB) => {
    const scoreA = (scores[postA.id] || { posScore: 0, negScore: 0 }).posScore;
    const scoreB = (scores[postB.id] || { posScore: 0, negScore: 0 }).posScore;
    return scoreB - scoreA;
  });

  return (
    <PageWrapper>
      {!!sortedPosts?.length && <PostList posts={sortedPosts} />}
      {showModal && <DeleteModal />}
    </PageWrapper>
  );
}

export default Best;
