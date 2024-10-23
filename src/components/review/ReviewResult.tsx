import { dataStore } from '../../store/dataStore';

const ReviewResult = () => {
  const reviewedText = dataStore((state) => state.reviewedText);

  return (
    <>
      <h2 className="mb-4 text-lg font-bold">첨삭 결과</h2>
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto rounded-lg bg-white">
        <p className="whitespace-pre-wrap">{reviewedText}</p>
      </div>
    </>
  );
};

export default ReviewResult;
