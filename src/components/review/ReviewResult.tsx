import LoadingAnimation from '../loading/LoadingAnimation';

import { dataStore } from '../../store/dataStore';

type ReviewResultProps = {
  isPending: boolean;
};

const ReviewResult = ({ isPending }: ReviewResultProps) => {
  const reviewedText = dataStore((state) => state.reviewedText);

  return (
    <div className="flex h-full flex-col">
      <h2 className="mb-4 flex-shrink-0 text-lg font-bold">첨삭 결과</h2>
      <div className="max-h-[calc(100vh-200px)] flex-1 overflow-y-auto rounded-lg bg-white p-2">
        {isPending ? (
          <LoadingAnimation />
        ) : (
          <p className="whitespace-pre-wrap break-keep">{reviewedText}</p>
        )}
      </div>
    </div>
  );
};

export default ReviewResult;
