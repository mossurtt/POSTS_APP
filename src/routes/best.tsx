import { posts } from '../posts';
import Post from '../components/Post/Post';
import { useScore } from '../context/ScoreContext';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Best() {
  const onEdit = () => {
    console.log('edit button clicked');
  };

  const onDelete = () => {
    console.log('delete button clicked');
  };

  const { scores } = useScore();

  const sortedPosts = [...posts];

  sortedPosts.sort((postA, postB) => {
    const scoreA = (scores[postA.id] || { posScore: 0, negScore: 0 }).posScore;
    const scoreB = (scores[postB.id] || { posScore: 0, negScore: 0 }).posScore;
    return scoreB - scoreA;
  });

  return (
    <>
      <Header />
      <div>
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
      </div>
      <Footer />
    </>
  );
}

export default Best;
