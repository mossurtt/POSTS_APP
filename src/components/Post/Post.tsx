import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PostProps from './Post.types';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import Rating from '../Rating/Rating';
import { useScore } from '../../contexts/ScoreContext/ScoreContext';
import { usePost } from '../../contexts/PostContext/PostContext';
import { PATHS } from '../../constants/paths';
import { useModal } from '../../contexts/ModalContext/ModalContext';
import Col from '../Col/Col';
import Row from '../Row/Row';

function Post(props: PostProps) {
  const {
    id, title, avatarUrl, createdAt, content, canRate, editable,
  } = props;
  const { scores, addScore, removeScore } = useScore();
  const { updatePost, setSelectedPost } = usePost();
  const { setShowModal } = useModal();

  const [ratedPos, setRatedPos] = useState<boolean>(false);
  const [ratedNeg, setRatedNeg] = useState<boolean>(false);
  const navigate = useNavigate();

  const postScores = scores[id] || { posScore: 0, negScore: 0 };

  const handleScoreClick = (isAdd: boolean): void => {
    if (canRate) {
      if (!ratedPos) {
        addScore(id, isAdd);
        setRatedPos(isAdd);

        if (ratedNeg) {
          removeScore(id, !isAdd);
          setRatedNeg(!isAdd);
        }
      } else {
        removeScore(id, isAdd);
        setRatedPos(!isAdd);
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

  const onDelete = () => {
    setShowModal(true);
    setSelectedPost(props);
  };

  const handleOnEdit = () => {
    setSelectedPost(props);
    navigate(PATHS.POST_DETAILS);
  };

  const { register, handleSubmit } = useForm({
    defaultValues: { title, content },
  });

  const handleOnSave = (post: Pick<PostProps, 'title' | 'content'>) => {
    updatePost({ ...props, ...post });
    navigate(-1);
  };

  const handleOnCancel = () => {
    navigate(-1);
  };

  return (
    <Col>
      <div className="w-full border rounded-lg p-4 m-4 relative bg-slate-50">
        <Rating
          averageScore={averageScore}
          averageScoreColor={averageScoreColor}
        />
        <div className="flex justify-between">
          <div className="flex items-center">
            <Avatar src={avatarUrl} alt="avatar" size="48px" />
            {editable ? (
              <input
                {...register('title')}
                id="title"
                className="m-2 p-2 border rounded-md w-full text-base font-medium"
              />
            ) : (
              <div className="ml-4 text-base font-semibold">{title}</div>
            )}
          </div>
          <div className="text-gray-500 text-sm self-center">{createdAt}</div>
        </div>
        {editable ? (
          <textarea
            {...register('content')}
            id="content"
            className="mt-1 p-2 border rounded-md w-full text-xs"
          />
        ) : (
          <div className="mt-4 text-xs flex-grow">{content}</div>
        )}
        <Row>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faPlusSquare}
              className="text-green-400 cursor-pointer text-xl"
              onClick={() => handleScoreClick(true)}
            />
            <span>{postScores.posScore}</span>
            <FontAwesomeIcon
              icon={faMinusSquare}
              className="text-red-500 mr-2 cursor-pointer text-xl"
              onClick={() => handleScoreClick(false)}
            />
            <span>{postScores.negScore}</span>
          </div>
          {editable ? (
            <div className="flex space-x-2">
              <Button
                onClick={handleSubmit(handleOnSave)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                title="Save"
              />
              <Button
                onClick={handleOnCancel}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                title="Cancel"
              />
            </div>
          ) : (
            <div>
              <Button
                onClick={handleOnEdit}
                className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded"
                title="Edit"
              />
              <Button
                onClick={onDelete}
                className="text-red hover:bg-red-300 px-3 py-1 rounded"
                title="Delete"
              />
            </div>
          )}
        </Row>
      </div>
    </Col>
  );
}

export default Post;
