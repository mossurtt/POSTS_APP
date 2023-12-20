import Button from '../components/Button/Button';
import '../index.css';
import CustomLink from '../components/Link/Link';

function Root() {
  const onClick = () => {};

  return (
    <div
      id="root"
      className="flex flex-col items-center justify-center h-screen bg-emerald-400"
    >
      <div className="font-sans font-bold text-7xl text-white mb-4">HELLO</div>
      <CustomLink to="/posts" isNotHoverable>
        <Button onClick={onClick} title="SHOW POSTS" />
      </CustomLink>
    </div>
  );
}

export default Root;
