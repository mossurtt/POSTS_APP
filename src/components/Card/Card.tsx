import CardProps from './card.types';

function Card(props: CardProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-1/3 border rounded-lg p-4 m-4 flex flex-col relative">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
