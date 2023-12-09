import { usePost } from '../contexts/PostContext/PostContext';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import Post from '../components/Post/Post';

function EditPage() {
  const { selectedPost } = usePost();

  if (!selectedPost) {
    return null;
  }

  return (
    <PageWrapper>
      <Post {...selectedPost} editable canRate={false} />
    </PageWrapper>
  );
}

export default EditPage;
