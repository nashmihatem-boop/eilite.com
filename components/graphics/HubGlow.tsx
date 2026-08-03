export function HubGlow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hubGlowFill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f6c468" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#f0a82c" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#f0a82c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hubLine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f6c468" />
          <stop offset="100%" stopColor="#d6911e" />
        </linearGradient>
      </defs>

      <circle cx="260" cy="260" r="240" fill="url(#hubGlowFill)" />
      <circle cx="260" cy="260" r="190" stroke="#f6c468" strokeOpacity="0.35" strokeWidth="1" fill="none" />
      <circle cx="260" cy="260" r="130" stroke="#f6c468" strokeOpacity="0.3" strokeWidth="1" fill="none" />

      {/* spokes */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const r1 = 40;
        const r2 = 190;
        const rad = (deg * Math.PI) / 180;
        const x1 = 260 + r1 * Math.cos(rad);
        const y1 = 260 + r1 * Math.sin(rad);
        const x2 = 260 + r2 * Math.cos(rad);
        const y2 = 260 + r2 * Math.sin(rad);
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#hubLine)"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
        );
      })}

      {/* outer nodes */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const r = 190;
        const rad = (deg * Math.PI) / 180;
        const x = 260 + r * Math.cos(rad);
        const y = 260 + r * Math.sin(rad);
        return <circle key={deg} cx={x} cy={y} r="6" fill="#f6c468" />;
      })}

      {/* mid nodes */}
      {[30, 110, 200, 300].map((deg) => {
        const r = 130;
        const rad = (deg * Math.PI) / 180;
        const x = 260 + r * Math.cos(rad);
        const y = 260 + r * Math.sin(rad);
        return <circle key={deg} cx={x} cy={y} r="4" fill="#f6c468" />;
      })}

      {/* core */}
      <circle cx="260" cy="260" r="42" fill="#ffffff" stroke="#f0a82c" strokeWidth="2" />
      <circle cx="260" cy="260" r="42" fill="url(#hubGlowFill)" opacity="0.6" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 260 + 14 * Math.cos(rad);
        const y1 = 260 + 14 * Math.sin(rad);
        const x2 = 260 + 34 * Math.cos(rad);
        const y2 = 260 + 34 * Math.sin(rad);
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f0a82c" strokeWidth="2" />;
      })}
      <circle cx="260" cy="260" r="13" fill="#f0a82c" />
    </svg>
  );
}
