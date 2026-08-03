"use client";

import type { ReactNode } from "react";
import { useDemoModal } from "@/lib/demo-modal-context";

export function DemoTriggerButton({
  children,
  className,
  industry,
}: {
  children: ReactNode;
  className?: string;
  industry?: string;
}) {
  const { open } = useDemoModal();
  return (
    <button type="button" onClick={() => open(industry)} className={className}>
      {children}
    </button>
  );
}
