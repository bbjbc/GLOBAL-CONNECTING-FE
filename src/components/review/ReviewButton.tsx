import axios from 'axios';

import { dataStore } from '../../store/dataStore';
import { Button } from '../ui/Button';

const ReviewButton = () => {
  const { setIsLoading, addChat, resumeText, setReviewedText } = dataStore();

  const handleReview = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post('/api/review', {
        text: resumeText,
      });

      const reviewedContent = response.data.reviewedText;
      setReviewedText(reviewedContent);
      addChat(reviewedContent);
    } catch (error) {
      console.error(error);
      addChat('죄송합니다. 첨삭 중에 오류가 발생했어요. 다시 시도해 주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button className="w-full" onClick={handleReview}>
      자소서 첨삭
    </Button>
  );
};

export default ReviewButton;
