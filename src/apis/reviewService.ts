import axios from 'axios';

import { API_END_POINT } from '../constants/path';
import { IReviewPayload, IReviewResponse } from '../types/review';
import { generateReviewText } from '../mocks/mockReview';

export const reviewService = {
  review: async (data: IReviewPayload): Promise<IReviewResponse> => {
    const response = await axios.post<IReviewResponse>(
      API_END_POINT.REVIEW,
      data,
    );
    return response.data;
  },

  mockReview: async (data: IReviewPayload): Promise<IReviewResponse> => {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    return {
      reviewedText: generateReviewText(data.resumeText),
    };
  },
};
