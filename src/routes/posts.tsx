import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../components/Link/Link';
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
      <header className="bg-blue-500 p-4 mb-10 flex justify-between items-center">
        <div>
          <img src="../assets/05_app_icon.png" alt="Logo" />
        </div>
        <div className="flex justify-center">
          <CustomLink
            to="/posts"
            style={{
              textDecoration:
                window.location.pathname === '/posts' ? 'underline' : 'none',
            }}
          >
            Posts
          </CustomLink>
          <CustomLink
            to="/best"
            style={{
              textDecoration:
                window.location.pathname === '/best' ? 'underline' : 'none',
            }}
          >
            Best
          </CustomLink>
          <CustomLink to="/new-post">
            <FontAwesomeIcon icon={faPlus} />
          </CustomLink>
        </div>
      </header>
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
