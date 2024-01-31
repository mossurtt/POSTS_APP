import { useModal } from '../../contexts/ModalContext/ModalContext';
import DeleteModal from '../Modals/DeleteModal/DeleteModal';
import Post from '../Post/Post';
import PostListProps from './PostList.types';

function PostList({ posts, canRate }: PostListProps) {
  const { showModal } = useModal();
  return (
    <div className="pb-20">
      {posts.map((post) => (
        <Post {...post} key={post.id} canRate={canRate} editable={false} />
      ))}
      {showModal && <DeleteModal />}
    </div>
  );
}

export default PostList;
