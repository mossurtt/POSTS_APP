import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import PostProps from './post.types';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import Rating from '../Rating/Rating';
import { useScore } from '../../contexts/ScoreContext';

function Post({
  id,
  title,
  avatarUrl,
  date,
  content,
  onEdit,
  onDelete,
  canRate,
}: PostProps) {
  const { scores, addScore, removeScore } = useScore();
  const [ratedPos, setRatedPos] = useState(false);
  const [ratedNeg, setRatedNeg] = useState(false);

  const postScores = scores[id] || { posScore: 0, negScore: 0 };

  const handlePosScoreClick = (): void => {
    if (canRate) {
      if (!ratedPos) {
        addScore(id, true);
        setRatedPos(true);

        if (ratedNeg) {
          removeScore(id, false);
          setRatedNeg(false);
        }
      } else {
        removeScore(id, true);
        setRatedPos(false);
      }
    }
  };

  const handleNegScoreClick = () => {
    if (canRate) {
      if (!ratedNeg) {
        addScore(id, false);
        setRatedNeg(true);
        if (ratedPos) {
          removeScore(id, true);
          setRatedPos(false);
        }
      } else {
        removeScore(id, false);
        setRatedNeg(false);
      }
    }
  };

  const getAverageScore = (): number => postScores.posScore - postScores.negScore;
  const getAverageScoreColor = (averageScore: number): string => {
    if (averageScore > 0) {
      return 'bg-green-400';
    }
    if (averageScore === 0) {
      return 'bg-yellow-300';
    }
    return 'bg-red-800';
  };

  const averageScore = getAverageScore();
  const averageScoreColor = getAverageScoreColor(averageScore);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-3/4 border rounded-lg p-4 m-4 flex flex-col relative bg-slate-50">
        <Rating
          averageScore={averageScore}
          averageScoreColor={averageScoreColor}
        />
        <div className="flex justify-between">
          <div className="flex items-center">
            <Avatar src={avatarUrl} alt="avatar" size="48px" />
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
            <span>{postScores.posScore}</span>
            <FontAwesomeIcon
              icon={faMinusSquare}
              className="text-red-500 mr-2 cursor-pointer text-xl"
              onClick={handleNegScoreClick}
            />
            <span>{postScores.negScore}</span>
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
