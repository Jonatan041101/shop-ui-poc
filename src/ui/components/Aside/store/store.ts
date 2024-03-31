import { create, StateCreator } from "zustand";

interface ICurrentPage {
  currentPage: number | "loading";
  handleChangeCurrentPage: (currentPage: number) => void;
}

const currentPageSlice: StateCreator<ICurrentPage> = (set) => ({
  currentPage: "loading",
  handleChangeCurrentPage(currentPage) {
    set((state) => ({ ...state, currentPage }));
  },
});

export const useCurrentPage = create<ICurrentPage>((...args) => ({
  ...currentPageSlice(...args),
}));
