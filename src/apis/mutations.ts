import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { API_END_POINT } from '../constants/path';

interface ReviewPayload {
  resumeText: string;
}

interface ReviewResponse {
  reviewedText: string;
}

export const reviewResume = async (
  data: ReviewPayload,
): Promise<ReviewResponse> => {
  const response = await axios.post<ReviewResponse>(API_END_POINT.REVIEW, data);
  return response.data;
};

export const useReviewMutation = () => {
  return useMutation({
    mutationFn: reviewResume,
  });
};
