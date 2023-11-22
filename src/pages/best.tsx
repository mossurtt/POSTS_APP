import Post from '../components/Post/Post';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useScore } from '../contexts/ScoreContext';
import { usePost } from '../contexts/PostContext';

function Best() {
  const onEdit = () => {
    console.log('edit button clicked');
  };

  const onDelete = () => {
    console.log('delete button clicked');
  };

  const { scores } = useScore();
  const { posts } = usePost();

  const sortedPosts = [...(posts || [])];

  sortedPosts.sort((postA, postB) => {
    const scoreA = (scores[postA.id] || { posScore: 0, negScore: 0 }).posScore;
    const scoreB = (scores[postB.id] || { posScore: 0, negScore: 0 }).posScore;
    return scoreB - scoreA;
  });

  return (
    <div className="min-h-screen bg-[#82d6ca]">
      <Header />
      {sortedPosts.map((post, index) => (
        <Post
          key={index}
          id={post.id}
          title={post.title}
          avatarUrl="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
          content={post.content}
          date={post.date}
          onEdit={onEdit}
          onDelete={onDelete}
          canRate={false}
        />
      ))}
      <Footer />
    </div>
  );
}

export default Best;
