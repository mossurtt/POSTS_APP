import Post from '../Post/Post';
import PostListProps from './postlist.types';

function PostList({ posts, onEdit, onDelete }: PostListProps) {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          avatarUrl="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
          date={post.date}
          content={post.content}
          onEdit={onEdit}
          onDelete={onDelete}
          canRate
        />
      ))}
    </div>
  );
}

export default PostList;
