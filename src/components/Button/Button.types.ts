interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  title: string;
  className?: string;
}

export default ButtonProps;
