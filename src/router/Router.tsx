import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import ReviewPage from '../pages/ReviewPage';
import { PATH } from '../constants/path';

const Router = () => {
  const { LANDING, REVIEW } = PATH;

  const router = createBrowserRouter([
    {
      path: LANDING,
      element: <LandingPage />,
    },
    {
      path: REVIEW,
      element: <ReviewPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
