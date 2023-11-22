import Post from '../Post/Post';
import PostListProps from './postlist.types';

function PostList({ posts, onEdit, onDelete }: PostListProps) {
  return (
    <div>
      {posts.map((post) => (
        <Post
          {...post}
          key={post.id}
          onEdit={onEdit}
          onDelete={onDelete}
          canRate
          avatarUrl="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
        />
      ))}
    </div>
  );
}

export default PostList;
