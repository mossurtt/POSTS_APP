import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { PostFormData, PostSchema } from './PostSchema';

function Post(props: PostProps) {
  const {
    id, title, avatarUrl, createdAt, content, canRate, editable,
  } = props;
  const { scores, addScore, removeScore } = useScore();
  const { updatePost, setSelectedPost } = usePost();
  const { setShowModal } = useModal();

  const { t } = useTranslation();

  const [ratedPos, setRatedPos] = useState<boolean>(false);
  const [ratedNeg, setRatedNeg] = useState<boolean>(false);
  const navigate = useNavigate();

  const postScores = scores[id] || { posScore: 0, negScore: 0 };

  const handleScoreClick = (isAdd: boolean): void => {
    if (canRate) {
      switch (true) {
        case !ratedPos && !ratedNeg:
          isAdd ? addScore(id, true) : addScore(id, false);
          setRatedPos(isAdd);
          setRatedNeg(!isAdd);
          break;
        case ratedPos && !ratedNeg && !isAdd:
          removeScore(id, true);
          setRatedPos(false);
          addScore(id, false);
          setRatedNeg(true);
          break;
        case !ratedPos && ratedNeg && isAdd:
          removeScore(id, false);
          setRatedNeg(false);
          addScore(id, true);
          setRatedPos(true);
          break;
        case ratedPos && !ratedNeg && isAdd:
          removeScore(id, true);
          setRatedPos(false);
          break;
        case !ratedPos && ratedNeg && !isAdd:
          removeScore(id, false);
          setRatedNeg(false);
          break;
        default:
          break;
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(PostSchema),
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
      <div className="w-3/4 min-w-48 border rounded-lg p-4 m-4 relative bg-slate-50">
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
                className={twMerge(
                  'm-2 p-2 border rounded-md w-11/12',
                  errors.title?.message && 'placeholder-red-300',
                )}
                placeholder={
                  (errors.title && `${t('title-error')}`) ?? `${t('title')}`
                }
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
            className={twMerge(
              'm-4 p-2 border rounded-md w-11/12 text-base',
              errors.content?.message && 'placeholder-red-300',
            )}
            placeholder={
              (errors.content && `${t('content-error')}`) ?? `${t('content')}`
            }
          />
        ) : (
          <div className="mt-4 text-base flex-grow">{content}</div>
        )}
        <Row>
          {canRate ? (
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
          ) : (
            <p />
          )}
          {editable ? (
            <div className="flex space-x-2">
              <Button
                onClick={handleSubmit(handleOnSave)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                title={t('save')}
              />
              <Button
                onClick={handleOnCancel}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                title={t('cancel')}
              />
            </div>
          ) : (
            <div>
              <Button
                onClick={handleOnEdit}
                className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded"
                title={t('edit')}
              />
              <Button
                onClick={onDelete}
                className="text-red hover:bg-red-300 px-3 py-1 rounded"
                title={t('delete')}
              />
            </div>
          )}
        </Row>
      </div>
    </Col>
  );
}

export default Post;
