import CardProps from './Card.types';

function Card({ children, isLoading }: CardProps) {
  return (
    <div className="flex justify-center min-h-max overflow:hidden">
      <div className="w-3/4 border rounded-lg p-4 m-4 flex flex-col relative bg-slate-50">
        {isLoading ? <p>Loading...</p> : children}
      </div>
    </div>
  );
}

export default Card;
