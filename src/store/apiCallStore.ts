/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
export type apiStoreProps = {
  // just like props defining
  data: any;
  callDataAsync: () => Promise<void>;
  loading: boolean;
};

export const useApiStore = create<apiStoreProps>((set) => ({
  // set is used to set the values
  data: 0, // initial state
  loading: false,
  callDataAsync: async () => {
    try {
      set(() => ({ loading: true }));
      const response = await fetch("http://dummyjson.com/users");
      const finalData = await response.json();
      set(() => ({ data: finalData }));
      set(() => ({ loading: false }));
    } catch (error) {
      console.error("got a error while making the api call", error);
      set(() => ({ loading: false }));
    }
  },
}));
