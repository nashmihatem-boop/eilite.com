"use client";

import { motion } from "framer-motion";
import { StatStrip } from "@/components/sections/StatStrip";
import { DemoTriggerButton } from "@/components/ui/DemoTriggerButton";

export function Hero() {
  return (
    <section className="bg-white pt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-[var(--color-line)]"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="absolute inset-0 bg-linear-to-b from-[var(--color-ink)]/80 via-[var(--color-ink)]/70 to-[var(--color-ink)]/85" />

          <div className="relative mx-auto max-w-3xl px-6 py-14 text-center sm:px-10 sm:py-20 lg:py-28">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-[var(--color-brand)] uppercase">
              America&apos;s Lead Generation Hub Since 2010
            </span>

            <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Premium Leads, Delivered Live.
              <br />
              <span className="text-[var(--color-brand)]">Built to Convert, Built to Scale.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-white/75 sm:text-lg">
              We are Eilite. For over a decade, we&apos;ve connected law firms, insurers, financial brands, and
              contractors with real, high-intent customers — through premium leads and live warm transfers, all
              vetted, verified, and built to convert.
            </p>

            <div className="mt-9 flex items-center justify-center">
              <DemoTriggerButton className="rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-brand-dark)]">
                Book a Demo Call
              </DemoTriggerButton>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-10 sm:mt-14">
        <StatStrip />
      </div>
    </section>
  );
}
