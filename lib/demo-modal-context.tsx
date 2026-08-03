"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type DemoModalContextValue = {
  isOpen: boolean;
  prefillIndustry?: string;
  open: (prefillIndustry?: string) => void;
  close: () => void;
};

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefillIndustry, setPrefillIndustry] = useState<string | undefined>(undefined);

  return (
    <DemoModalContext.Provider
      value={{
        isOpen,
        prefillIndustry,
        open: (industry) => {
          setPrefillIndustry(industry);
          setIsOpen(true);
        },
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) throw new Error("useDemoModal must be used within DemoModalProvider");
  return ctx;
}
