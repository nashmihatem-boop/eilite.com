"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type OfferSelection = {
  role: "Advertiser" | "Affiliate" | "Both";
  solution: string;
};

type OfferSelectionContextValue = {
  selection: OfferSelection | null;
  selectOffer: (selection: OfferSelection) => void;
};

const OfferSelectionContext = createContext<OfferSelectionContextValue | null>(null);

export function OfferSelectionProvider({ children }: { children: ReactNode }) {
  const [selection, setSelection] = useState<OfferSelection | null>(null);

  return (
    <OfferSelectionContext.Provider value={{ selection, selectOffer: setSelection }}>
      {children}
    </OfferSelectionContext.Provider>
  );
}

// Returns null outside a provider (rather than throwing) since AffiliateApplyForm
// is also rendered standalone on /affiliates with no offer cards to prefill from.
export function useOfferSelection() {
  return useContext(OfferSelectionContext);
}
