import { Link } from 'react-router-dom';
import CustomLinkProps from './link.types';

function CustomLink({
  to, style, isNotHoverable, children,
}: CustomLinkProps) {
  return (
    <Link
      className={`${
        !isNotHoverable && 'hover:bg-blue-800'
      } text-white font-bold py-1 px-2 rounded`}
      to={to}
      style={style}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
