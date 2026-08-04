export function Logomark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="15" stroke="#f0a82c" strokeWidth="1.4" opacity="0.35" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = (16 + 6 * Math.cos(rad)).toFixed(3);
        const y1 = (16 + 6 * Math.sin(rad)).toFixed(3);
        const x2 = (16 + 12.5 * Math.cos(rad)).toFixed(3);
        const y2 = (16 + 12.5 * Math.sin(rad)).toFixed(3);
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f0a82c" strokeWidth="2.2" strokeLinecap="round" />;
      })}
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = (16 + 12.5 * Math.cos(rad)).toFixed(3);
        const y = (16 + 12.5 * Math.sin(rad)).toFixed(3);
        return <circle key={deg} cx={x} cy={y} r="2.3" fill="#f6c468" />;
      })}
      <circle cx="16" cy="16" r="5.5" fill="#f0a82c" />
    </svg>
  );
}
