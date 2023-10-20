import { LinkProps } from 'react-router-dom';

interface CustomLinkProps extends LinkProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export default CustomLinkProps;
