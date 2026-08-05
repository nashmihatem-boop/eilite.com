import { DollarSign, CalendarDays, Users, LayoutGrid, ThumbsUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const stats: { icon: LucideIcon; value: string; label: string; hideOnMobile?: boolean }[] = [
  { icon: DollarSign, value: "$1.5B+", label: "Leads & transfers delivered" },
  { icon: CalendarDays, value: "2010", label: "Founded, industry pioneer" },
  { icon: Users, value: "120+", label: "Team members nationwide" },
  { icon: LayoutGrid, value: "4", label: "Industries served", hideOnMobile: true },
  { icon: ThumbsUp, value: "94%", label: "Customer satisfaction" },
];

export function StatStrip() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 pb-20 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`flex-col items-center gap-3 rounded-2xl border border-[var(--color-line)] bg-white px-4 py-7 text-center shadow-sm ${
            stat.hideOnMobile ? "hidden sm:flex" : "flex"
          }`}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface-tint)]">
            <stat.icon className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={2} />
          </span>
          <span className="font-heading text-xl font-bold text-[var(--color-brand)]">{stat.value}</span>
          <span className="text-sm text-[var(--color-muted)]">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
