import { useMutation } from '@tanstack/react-query';

import { reviewService } from './reviewService';
import { dataStore } from '../store/dataStore';

export const useReviewMutation = () => {
  const { setReviewedText } = dataStore();

  return useMutation({
    mutationFn: reviewService.mockReview,
    onMutate: () => {
      setReviewedText('');
    },
    onSuccess: (data) => {
      setReviewedText(data.reviewedText);
    },
    onError: (error) => {
      console.error(error);
      setReviewedText('');
    },
  });
};
