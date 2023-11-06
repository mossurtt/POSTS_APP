type PostProps = {
  id: number;
  title: string;
  avatarUrl: string;
  date: string;
  content: string;
  className?: string;
  onEdit: () => void;
  onDelete: () => void;
  canRate: boolean;
};

export default PostProps;
