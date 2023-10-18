import Button from './components/Button/Button';
import Card from './components/Card/Card';
import './index.css';

function App() {
  const showMessage = () => {
    console.log('hello world');
  };

  return (
    <Card>
      <Button title="show posts" onClick={showMessage} />
    </Card>
  );
}

export default App;
