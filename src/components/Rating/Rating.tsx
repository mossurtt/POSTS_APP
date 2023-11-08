import RatingProps from './rating.types';

function Rating({ averageScore, averageScoreColor }: RatingProps) {
  return (
    <div
      className={`rounded-full absolute -top-5 -right-5 pt-2 h-10 w-10 ${averageScoreColor} text-center `}
    >
      <div className="text-white font-semibold">{averageScore}</div>
    </div>
  );
}

export default Rating;
