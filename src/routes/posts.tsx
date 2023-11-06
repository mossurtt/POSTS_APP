import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Post from '../components/Post/Post';
import { posts } from '../constants/posts';

function Posts() {
  const onEdit = () => {
    console.log('edit button clicked');
  };

  const onDelete = () => {
    console.log('delete button clicked');
  };

  return (
    <div className="min-h-screen bg-[#82d6ca]">
      <Header />
      <div>
        {posts.map((post, index) => (
          <Post
            key={index}
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
      <Footer />
    </div>
  );
}

export default Posts;
