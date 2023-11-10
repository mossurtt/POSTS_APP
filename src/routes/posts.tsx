import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PostList from '../components/PostList/PostList';
import { usePost } from '../context/PostContext';
// import { posts } from '../constants/posts';

function Posts() {
  const onEdit = () => {
    console.log('edit button clicked');
  };

  const onDelete = () => {
    console.log('delete button clicked');
  };

  const { posts } = usePost();

  return (
    <div className="min-h-screen bg-[#82d6ca]">
      <Header />
      {posts && <PostList posts={posts} onEdit={onEdit} onDelete={onDelete} />}
      <Footer />
    </div>
  );
}

export default Posts;
