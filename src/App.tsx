import Button from './components/Button/Button';
import Post from './components/Post/Post';
import './index.css';

function App() {
  const showMessage = () => {
    console.log('hello world');
  };

  const onEdit = () => {
    console.log('edit button clicked');
  };

  const onDelete = () => {
    console.log('delete button clicked');
  };

  return (
    <>
      <Button title="show posts" onClick={showMessage} />
      <Post
        title="Some title"
        avatarUrl="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
        date="13.10.2023"
        content="Anim magna deserunt id deserunt reprehenderit deserunt occaecat excepteur Lorem ut minim. Et occaecat enim et eiusmod magna nisi ipsum elit velit sit minim Lorem tempor. Consectetur do id cupidatat nisi occaecat fugiat. Reprehenderit cupidatat consequat qui amet adipisicing. Exercitation duis est veniam adipisicing elit proident Lorem deserunt sunt amet ea id."
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </>
  );
}

export default App;
