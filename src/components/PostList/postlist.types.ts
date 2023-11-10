import PostProps from '../Post/post.types';

interface PostListProps {
  posts: PostProps[];
  onEdit: () => void;
  onDelete: () => void;
}

export default PostListProps;
