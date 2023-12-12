import { usePost } from '../../contexts/PostContext/PostContext';
import DeleteModal from '../Modals/DeleteModal/DeleteModal';
import Post from '../Post/Post';
import PostListProps from './postlist.types';

function PostList({ posts }: PostListProps) {
  const { showModal } = usePost();
  return (
    <div>
      {posts.map((post) => (
        <Post
          {...post}
          key={post.id}
          canRate
          avatarUrl="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
          editable={false}
        />
      ))}
      {showModal && <DeleteModal />}
    </div>
  );
}

export default PostList;
