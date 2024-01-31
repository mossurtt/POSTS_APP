import CreatePostForm from '../components/CreatePost/CreatePost';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import PostProps from '../components/Post/Post.types';

function NewPost({ title, content, ...rest }: PostProps) {
  return (
    <PageWrapper>
      <CreatePostForm title="title" content="content" {...rest} />
    </PageWrapper>
  );
}

export default NewPost;
