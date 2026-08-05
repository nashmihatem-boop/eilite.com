export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline ${className ?? ""}`}>
      eilite
      <svg viewBox="0 0 24 24" className="ml-0.5 h-[0.32em] w-[0.32em] -translate-y-[0.6em]" aria-hidden="true">
        <polygon points="12,1 21.53,17.5 2.47,17.5" fill="var(--color-brand)" />
        <polygon points="21.53,6.5 12,23 2.47,6.5" fill="var(--color-brand)" />
      </svg>
    </span>
  );
}
