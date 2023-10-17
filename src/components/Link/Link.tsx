import { Link } from 'react-router-dom';
import CustomLinkProps from './link.types';

function CustomLink({ to, title }: CustomLinkProps) {
  return (
    <Link
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      to={to}
    >
      {title}
    </Link>
  );
}

export default CustomLink;
