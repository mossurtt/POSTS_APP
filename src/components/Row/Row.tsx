import { RowProps } from './Row.types';

function Row(props: RowProps) {
  return (
    <div className="flex flex-row mt-4 justify-between items-end">
      {props.children}
    </div>
  );
}

export default Row;
