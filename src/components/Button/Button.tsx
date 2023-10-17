import ButtonProps from './button.types';

function Button({ title, onClick, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
      {...rest}
    >
      {title}
    </button>
  );
}

export default Button;
