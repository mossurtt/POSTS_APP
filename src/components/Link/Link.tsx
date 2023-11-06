import { Link } from 'react-router-dom';
import CustomLinkProps from './link.types';

function CustomLink({ to, title, children }: CustomLinkProps) {
  return (
    <Link
      className="hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
      to={to}
    >
      {title || children}
    </Link>
  );
}

export default CustomLink;
