import { create } from 'zustand';

type DataState = {
  resumeText: string;
  reviewedText: string;
  chats: { id: string; text: string }[];
  setResumeText: (text: string) => void;
  setReviewedText: (text: string) => void;
  addChat: (text: string) => void;
  resetStore: () => void;
};

const dataStore = create<DataState>((set) => ({
  resumeText: '',
  reviewedText: '',
  chats: [],
  setResumeText: (text) => set({ resumeText: text }),
  setReviewedText: (text) => set({ reviewedText: text }),
  addChat: (text) =>
    set((state) => ({
      chats: [...state.chats, { id: Date.now().toString(), text }],
    })),
  resetStore: () => set({ resumeText: '', reviewedText: '', chats: [] }),
}));

export { dataStore };
