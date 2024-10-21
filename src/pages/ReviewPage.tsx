import ResumeInput from '../components/resume/ResumeInput';
import ReviewButton from '../components/review/ReviewButton';

const ReviewPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <main className="p-8">
        <h1 className="mb-6 text-3xl font-bold">자기소개서 첨삭</h1>
        <ResumeInput />
        <div className="mt-4">
          <ReviewButton />
        </div>
      </main>
    </div>
  );
};

export default ReviewPage;
