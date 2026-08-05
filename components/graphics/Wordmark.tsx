export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline ${className ?? ""}`}>
      eilite
      <svg viewBox="0 0 24 24" className="ml-0.5 h-[0.32em] w-[0.32em] -translate-y-[0.6em]" aria-hidden="true">
        <polygon
          points="11.48,9.76 12,1.5 12.52,9.76 13.68,10.43 21.09,6.75 14.2,11.33 14.2,12.67 21.09,17.25 13.68,13.57 12.52,14.24 12,22.5 11.48,14.24 10.32,13.57 2.91,17.25 9.8,12.67 9.8,11.33 2.91,6.75 10.32,10.43"
          fill="var(--color-brand)"
        />
      </svg>
    </span>
  );
}
