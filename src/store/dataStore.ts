import { create } from 'zustand';

type DataState = {
  resumeText: string;
  reviewedText: string;
  isLoading: boolean;
  chats: { id: string; text: string }[];
  setResumeText: (text: string) => void;
  setReviewedText: (text: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  addChat: (text: string) => void;
};

const dataStore = create<DataState>((set) => ({
  resumeText: '',
  reviewedText: '',
  isLoading: false,
  chats: [],
  setResumeText: (text) => set({ resumeText: text }),
  setReviewedText: (text) => set({ reviewedText: text }),
  setIsLoading: (isLoading) => set({ isLoading }),
  addChat: (text) =>
    set((state) => ({
      chats: [...state.chats, { id: Date.now().toString(), text }],
    })),
}));

export { dataStore };
