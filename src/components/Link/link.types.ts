import { LinkProps } from 'react-router-dom';

interface CustomLinkProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
}

export default CustomLinkProps;
