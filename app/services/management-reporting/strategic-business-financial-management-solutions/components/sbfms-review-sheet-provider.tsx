"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type SbfmsReviewSheetContextValue = {
  reviewSheetOpen: boolean;
  setReviewSheetOpen: (open: boolean) => void;
};

const SbfmsReviewSheetContext =
  createContext<SbfmsReviewSheetContextValue | null>(null);

export function SbfmsReviewSheetProvider({ children }: { children: ReactNode }) {
  const [reviewSheetOpen, setReviewSheetOpen] = useState(false);

  const value = useMemo(
    () => ({ reviewSheetOpen, setReviewSheetOpen }),
    [reviewSheetOpen],
  );

  return (
    <SbfmsReviewSheetContext.Provider value={value}>
      {children}
    </SbfmsReviewSheetContext.Provider>
  );
}

export function useSbfmsReviewSheet() {
  const ctx = useContext(SbfmsReviewSheetContext);
  if (!ctx) {
    throw new Error(
      "useSbfmsReviewSheet must be used within SbfmsReviewSheetProvider",
    );
  }
  return ctx;
}
