export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline ${className ?? ""}`}>
      eilite
      <svg viewBox="0 0 24 24" className="ml-0.5 h-[0.32em] w-[0.32em] -translate-y-[0.6em]" aria-hidden="true">
        <polygon
          points="10.89,7.85 12,1.2 13.11,7.85 15.04,8.96 21.35,6.6 16.15,10.89 16.15,13.11 21.35,17.4 15.04,15.04 13.11,16.15 12,22.8 10.89,16.15 8.96,15.04 2.65,17.4 7.85,13.11 7.85,10.89 2.65,6.6 8.96,8.96"
          fill="var(--color-brand)"
        />
      </svg>
    </span>
  );
}
