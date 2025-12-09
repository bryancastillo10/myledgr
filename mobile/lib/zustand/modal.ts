import { create } from "zustand";
import { ModalState } from "@/lib/zustand/interface";

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: null,
  setOpenModal: (type: string) =>
    set(() => ({ isOpen: true, modalType: type })),
  setCloseModal: () => set(() => ({ isOpen: false, modalType: null })),
}));
