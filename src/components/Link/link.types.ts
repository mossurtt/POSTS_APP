import { LinkProps } from 'react-router-dom';

interface CustomLinkProps extends LinkProps {
  title: string;
  className?: string;
}

export default CustomLinkProps;
