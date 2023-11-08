import Header from '../components/Header/Header';
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
    <div className="min-h-screen">
      <Header />
      <div>
        {posts.map((post, index) => (
          <Post
            key={index}
            title={post.title}
            avatarUrl="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
            date={post.date}
            content={post.content}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
      <footer className="bg-blue-500 text-sm p-2 mt-8 text-slate-100">
        <p>&copy; 2023 POSTS-APP</p>
      </footer>
    </div>
  );
}

export default Posts;
