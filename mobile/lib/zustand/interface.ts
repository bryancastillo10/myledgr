import { BaseTransaction } from "@/features/transaction/api/interface";

// User State
export interface User {
  id: string;
  username: string;
  email: string;
  bio?: string | null;
  address?: string | null;
  currency: string;
  theme: string;
  role: "ADMIN" | "PUBLIC" | string;

  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;

  isAuthenticated: () => boolean;
}

// Modal State
export interface ModalState {
  isOpen: boolean;
  modalType: string | null;
  setOpenModal: (type: string) => void;
  setCloseModal: () => void;
}

// Theme State
export interface ThemeState {
  theme: string;
  setTheme: (theme: string) => void;
}

// Toast State
export type ToastStatus = "success" | "error" | "default";

export interface ToastState {
  isVisible: boolean;
  message: string;
  status: ToastStatus;
}

export interface ToastActions {
  showToast: (message: string, status?: ToastStatus) => void;
  hideToast: () => void;
}

// Transaction State
export interface TransactionState {
  transactions: BaseTransaction[];
  loading: boolean;
  fetchTransaction: () => Promise<void>;
}
