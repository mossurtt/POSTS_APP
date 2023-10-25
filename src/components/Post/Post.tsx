import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PostProps from './post.types';
import Button from '../Button/Button';

function Post({
  title,
  avatarUrl,
  date,
  content,
  onEdit,
  onDelete,
}: PostProps) {
  const [posScore, setPosScore] = useState<number>(0);
  const [negScore, setNegScore] = useState<number>(0);

  const handlePosScoreClick = (): void => {
    setPosScore(posScore + 1);
  };

  const handleNegScoreClick = (): void => {
    setNegScore(negScore + 1);
  };

  const getAverageScore = (posScore: number, negScore: number): number => posScore - negScore;
  const getAverageScoreColor = (averageScore: number): string => {
    if (averageScore > 0) {
      return 'bg-green-400';
    }
    if (averageScore === 0) {
      return 'bg-yellow-300';
    }
    return 'bg-red-800';
  };

  const averageScore = getAverageScore(posScore, negScore);
  const averageScoreColor = getAverageScoreColor(averageScore);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-3/4 border rounded-lg p-4 m-4 flex flex-col relative bg-slate-50">
        <div
          className={`rounded-full absolute -top-5 -right-5 pt-2 h-10 w-10 ${averageScoreColor} text-center `}
        >
          <div className="text-white font-semibold">{averageScore}</div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src={avatarUrl} alt="Avatar" className="w-full h-full" />
            </div>
            <div className="ml-4 text-base font-semibold">{title}</div>
          </div>
          <div className="text-gray-500 text-sm self-center">{date}</div>
        </div>
        <div className="mt-4 text-xs flex-grow">{content}</div>
        <div className="flex justify-between items-end mt-4">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faPlusSquare}
              className="text-green-400 cursor-pointer text-xl"
              onClick={handlePosScoreClick}
            />
            <span>{posScore}</span>
            <FontAwesomeIcon
              icon={faMinusSquare}
              className="text-red-500 mr-2 cursor-pointer text-xl"
              onClick={handleNegScoreClick}
            />
            <span>{negScore}</span>
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <Button
              onClick={onEdit}
              className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded"
              title="Edit"
            />
            <Button
              onClick={onDelete}
              className="text-red hover:bg-red-300 px-3 py-1 rounded"
              title="Delete"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
