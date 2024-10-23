import { useMutation } from '@tanstack/react-query';

import { reviewService } from './reviewService';

export const useReviewMutation = () => {
  const reviewFn = reviewService.mockReview;

  return useMutation({
    mutationFn: reviewFn,
  });
};
