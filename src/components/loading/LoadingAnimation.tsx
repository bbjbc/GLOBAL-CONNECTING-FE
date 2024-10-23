import { useState, useEffect } from 'react';

import { GiBrain } from 'react-icons/gi';
import { IoSparklesSharp } from 'react-icons/io5';
import { reviewPendingMessage } from '../../mocks/mockReviewMessage';

const LoadingAnimation = () => {
  const [dots, setDots] = useState('.');
  const [currentMessage, setCurrentMessage] = useState(0);
  const messages = reviewPendingMessage;

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '.' : prev + '.'));
    }, 500);
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => {
      clearInterval(dotInterval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div className="relative mb-8">
        <GiBrain className="h-16 w-16 animate-pulse text-blue-500" />
        <IoSparklesSharp className="absolute -right-2 -top-1 h-6 w-6 animate-bounce text-yellow-400" />
      </div>

      <div className="relative mb-8 h-2 w-64 overflow-hidden rounded-full bg-gray-200">
        <div className="animate-shimmer absolute h-full w-1/2 rounded-full bg-blue-500" />
      </div>

      <p className="text-lg font-medium text-gray-700">
        {messages[currentMessage]}
        {dots}
      </p>
    </div>
  );
};

export default LoadingAnimation;
