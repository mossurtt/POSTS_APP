import Button from './components/Button/Button';
import './index.css';

function App() {
  const showMessage = () => {
    console.log('hello world');
  };

  return <Button title="show posts" onClick={showMessage} />;
}

export default App;
