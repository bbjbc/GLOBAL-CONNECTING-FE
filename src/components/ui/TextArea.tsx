import { forwardRef, TextareaHTMLAttributes } from 'react';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className="w-full p-4 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
        {...props}
      />
    );
  },
);

TextArea.displayName = 'TextArea';

export { TextArea };
