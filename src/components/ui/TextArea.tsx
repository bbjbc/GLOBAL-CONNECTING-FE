import { TextareaHTMLAttributes } from 'react';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      className="w-full rounded-lg border border-gray-300 p-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
      {...props}
    />
  );
};

export { TextArea };
