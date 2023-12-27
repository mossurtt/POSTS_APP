import { ColProps } from './Col.types';

function Col(props: ColProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center p-4">
        {props.children}
      </div>
    </div>
  );
}

export default Col;
