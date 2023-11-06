type PostProps = {
  title: string;
  avatarUrl: string;
  date: string;
  content: string;
  className?: string;
  onEdit: () => void;
  onDelete: () => void;
};

export default PostProps;
