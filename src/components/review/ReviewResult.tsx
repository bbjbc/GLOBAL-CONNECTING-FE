import { dataStore } from '../../store/dataStore';

const ReviewResult = () => {
  const reviewedText = dataStore((state) => state.reviewedText);

  return (
    <div className="mt-4">
      <h2 className="mb-4 text-lg font-bold">첨삭 결과입니다.</h2>
      <div className="rounded-lg bg-white p-4">
        <p>{reviewedText}</p>
      </div>
    </div>
  );
};

export default ReviewResult;
