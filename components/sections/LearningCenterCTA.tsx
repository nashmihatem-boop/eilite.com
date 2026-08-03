import Link from "next/link";
import { DemoTriggerButton } from "@/components/ui/DemoTriggerButton";

export function LearningCenterCTA({
  title = "Ready to see warm transfers in action?",
  subtitle = "Talk to our team about live, validated leads for your industry.",
  buttonLabel = "Book a Demo Call",
  industry,
  href,
}: {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  industry?: string;
  href?: string;
}) {
  const buttonClassName =
    "mt-6 inline-block rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)]";

  return (
    <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface-tint)] p-8 text-center sm:p-10">
      <h3 className="font-heading text-xl font-bold text-[var(--color-ink)]">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-[var(--color-ink-soft)]">{subtitle}</p>
      {href ? (
        <Link href={href} className={buttonClassName}>
          {buttonLabel}
        </Link>
      ) : (
        <DemoTriggerButton className={buttonClassName} industry={industry}>
          {buttonLabel}
        </DemoTriggerButton>
      )}
    </div>
  );
}
