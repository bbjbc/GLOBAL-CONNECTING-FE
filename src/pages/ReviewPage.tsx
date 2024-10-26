import { Link } from 'react-router-dom';

import ResumeForm from '../components/resume/ResumeForm';
import ReviewResult from '../components/review/ReviewResult';

import { dataStore } from '../store/dataStore';
import { PATH } from '../constants/path';
import { useReviewMutation } from '../apis/mutations';

const ReviewPage = () => {
  const reviewedText = dataStore((state) => state.reviewedText);
  const mutation = useReviewMutation();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl justify-between p-4 sm:px-6 lg:px-8">
          <Link
            to={PATH.LANDING}
            className="text-lg font-bold transition-transform duration-300 hover:scale-105"
          >
            글로벌커넥팅
          </Link>
          <h1 className="text-lg font-bold">AI 자기소개서 첨삭</h1>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="h-full rounded-lg bg-white p-6 shadow-sm">
            <ResumeForm mutation={mutation} />
          </div>

          <div className="lg:h-full">
            {reviewedText || mutation.isPending ? (
              <div className="h-full rounded-lg bg-white p-4 shadow-sm">
                <ReviewResult isPending={mutation.isPending} />
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-lg bg-white/40 p-6">
                <p className="text-center text-gray-600">
                  자기소개서를 입력하고 첨삭 버튼을 눌러주세요.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReviewPage;
