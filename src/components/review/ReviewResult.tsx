import { useState } from 'react';

import { LuClipboardSignature } from 'react-icons/lu';
import { IoCheckmarkDone } from 'react-icons/io5';

import LoadingAnimation from '../loading/LoadingAnimation';
import { dataStore } from '../../store/dataStore';
import { Button } from '../ui/Button';

type ReviewResultProps = {
  isPending: boolean;
};

const ReviewResult = ({ isPending }: ReviewResultProps) => {
  const [copied, setCopied] = useState(false);
  const reviewedText = dataStore((state) => state.reviewedText);

  // 추후 토스트 메시지로 복사 완료 메시지를 보여줄 예정
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(reviewedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex h-full flex-col">
      <h2 className="flex-shrink-0 rounded-t-lg border-b-2 px-4 py-2 text-base font-bold">
        첨삭 결과
      </h2>
      <article className="relative flex-1 overflow-hidden bg-white">
        <div className="absolute inset-0 overflow-y-auto">
          {isPending ? (
            <LoadingAnimation />
          ) : (
            <div className="whitespace-pre-wrap break-keep p-4">
              {reviewedText}
            </div>
          )}
        </div>
      </article>

      {reviewedText && (
        <Button
          variant="secondary"
          onClick={handleCopy}
          className="mt-2 flex items-center justify-center gap-2 rounded-b-lg rounded-t-none"
        >
          {copied ? (
            <>
              <IoCheckmarkDone className="h-4 w-4" />
              <span>복사 완료</span>
            </>
          ) : (
            <>
              <LuClipboardSignature className="h-4 w-4" />
              <span>복사하기</span>
            </>
          )}
        </Button>
      )}
    </main>
  );
};

export default ReviewResult;
