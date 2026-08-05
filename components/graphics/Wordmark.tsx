export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline ${className ?? ""}`}>
      eilite
      <svg viewBox="0 0 24 24" className="ml-0.5 h-[0.32em] w-[0.32em] -translate-y-[0.6em]" aria-hidden="true">
        <path
          d="M12 2 L14.3 9.7 L22 12 L14.3 14.3 L12 22 L9.7 14.3 L2 12 L9.7 9.7 Z"
          fill="var(--color-brand)"
        />
      </svg>
    </span>
  );
}
