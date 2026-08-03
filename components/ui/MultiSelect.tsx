"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

type MultiSelectProps = {
  label: string;
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  otherValue: string;
  onOtherChange: (value: string) => void;
  placeholder?: string;
};

export function MultiSelect({ label, options, value, onChange, otherValue, onOtherChange, placeholder }: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggle = (opt: string) => {
    if (value.includes(opt)) onChange(value.filter((v) => v !== opt));
    else onChange([...value, opt]);
  };

  const isOtherSelected = value.includes("Other");
  const summary = value.length === 0 ? (placeholder ?? "Select...") : value.join(", ");

  return (
    <div ref={ref} className="relative">
      <label className="mb-1.5 block text-xs font-semibold text-[var(--color-ink)]">{label}</label>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-2 rounded-lg border border-[var(--color-line)] bg-white px-3.5 py-2.5 text-left text-sm text-[var(--color-ink)] focus:border-[var(--color-brand)] focus:outline-none"
      >
        <span className={`truncate ${value.length === 0 ? "text-[var(--color-muted)]" : ""}`}>{summary}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-[var(--color-ink-soft)] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-20 mt-1.5 w-full rounded-xl border border-[var(--color-line)] bg-white p-2 shadow-lg">
          {options.map((opt) => {
            const checked = value.includes(opt);
            return (
              <label
                key={opt}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm hover:bg-[var(--color-surface-alt)]"
              >
                <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggle(opt)} />
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                    checked ? "border-[var(--color-brand)] bg-[var(--color-brand)]" : "border-[var(--color-line)]"
                  }`}
                >
                  {checked && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                </span>
                <span className="text-[var(--color-ink)]">{opt}</span>
              </label>
            );
          })}

          <label className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm hover:bg-[var(--color-surface-alt)]">
            <input type="checkbox" className="sr-only" checked={isOtherSelected} onChange={() => toggle("Other")} />
            <span
              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                isOtherSelected ? "border-[var(--color-brand)] bg-[var(--color-brand)]" : "border-[var(--color-line)]"
              }`}
            >
              {isOtherSelected && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
            </span>
            <span className="text-[var(--color-ink)]">Other</span>
          </label>

          {isOtherSelected && (
            <input
              type="text"
              value={otherValue}
              onChange={(e) => onOtherChange(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              placeholder="Please specify"
              className="mt-1 w-full rounded-lg border border-[var(--color-line)] px-3 py-2 text-sm text-[var(--color-ink)] focus:border-[var(--color-brand)] focus:outline-none"
            />
          )}
        </div>
      )}
    </div>
  );
}
