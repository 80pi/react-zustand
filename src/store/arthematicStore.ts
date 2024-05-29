import { create } from "zustand";
export type arthematicStoreProps = {
  // just like props defining
  count: number;
  addCount: () => void;
  subCount: () => void;
  name?: string;
  setName: (userInput: string) => void;
};

export const useArthematicStore = create<arthematicStoreProps>((set) => ({
  // set is used to set the values
  count: 0, // initial state
  addCount: () => set((state: any) => ({ count: state.count + 1 })), // function adding the number
  subCount: () => set((state: any) => ({ count: state.count - 1 })), // function minus the number
  setName: (userInput: string) => set(() => ({ name: userInput })),
}));
