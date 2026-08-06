"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StatStrip } from "@/components/sections/StatStrip";
import { DemoTriggerButton } from "@/components/ui/DemoTriggerButton";

// Swap this to the real team photo once it's dropped into /public/images.
const TEAM_PHOTO_SRC = "/images/team-photo-placeholder.svg";

export function Hero() {
  return (
    <section className="bg-white pt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid overflow-hidden rounded-[2rem] border border-[var(--color-line)] sm:grid-cols-2"
        >
          <div className="relative flex flex-col justify-center bg-[var(--color-ink)] px-6 py-14 sm:px-10 sm:py-16 lg:py-20">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-[var(--color-brand)] uppercase">
              America&apos;s Lead Generation Hub Since 2010
            </span>

            <h1 className="mt-5 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Premium Leads, Delivered Live.
              <br />
              <span className="text-[var(--color-brand)]">Built to Convert, Built to Scale.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base text-white/75">
              We are Eilite. For over a decade, we&apos;ve connected law firms, insurers, financial brands, and
              contractors with real, high-intent customers — through premium leads and live warm transfers, all
              vetted, verified, and built to convert.
            </p>

            <div className="mt-9">
              <DemoTriggerButton className="rounded-full bg-[var(--color-brand)] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-brand-dark)]">
                Book a Demo Call
              </DemoTriggerButton>
            </div>
          </div>

          <div className="relative min-h-[320px] sm:min-h-0">
            <Image
              src={TEAM_PHOTO_SRC}
              alt="The Eilite team"
              fill
              priority
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div className="mt-10 sm:mt-14">
        <StatStrip />
      </div>
    </section>
  );
}
