import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Brand Identity",
  "Visual Design",
  "Digital Experiences",
  "Motion & Animation",
  "Creative Direction",
  "Campaign Design",
];

const values = [
  {
    label: "Craft",
    body: "Every pixel is intentional. We move slowly when it matters and quickly when it counts.",
  },
  {
    label: "Clarity",
    body: "Good design strips away noise. We find the essential and make it impossible to ignore.",
  },
  {
    label: "Collaboration",
    body: "We treat every project as a partnership — your knowledge of the problem, our command of the medium.",
  },
  {
    label: "Longevity",
    body: "Trend-chasing is a short game. We build things that hold up over time.",
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-48 pb-24">
      {/* ── Header ── */}
      <section className="mb-24">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
          About
        </p>
        <h1 className="text-5xl sm:text-6xl font-light tracking-wider leading-tight mb-10">
          We build digital experiences for creative people
        </h1>
        <div
          className="h-px w-full"
          style={{ background: "oklch(1 0 0 / 8%)" }}
        />
      </section>

      {/* ── Statement ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div>
          <p className="text-xl font-light leading-relaxed text-foreground">
            r2000 is a creative studio that believes the best design disappears
            into the work — noticed only by the feeling it leaves behind.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-muted-foreground text-sm leading-relaxed font-sans">
          <p>
            We partner with founders, brands, and teams who care deeply about
            how they show up in the world. From first-principles identity work
            to polished digital products, we bring the same rigour to every
            scale of problem.
          </p>
          <p>Based in London, but available wherever the work takes us.</p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="mb-24">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-8">
          What we do
        </p>
        <ul className="divide-y" style={{ borderColor: "oklch(1 0 0 / 8%)" }}>
          {services.map((service) => (
            <li
              key={service}
              className="py-5 flex items-center justify-between group"
            >
              <span className="text-lg font-light tracking-wide">
                {service}
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </li>
          ))}
        </ul>
        <div
          className="h-px w-full"
          style={{ background: "oklch(1 0 0 / 8%)" }}
        />
      </section>

      {/* ── Values ── */}
      <section className="mb-24">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-8">
          How we work
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((v) => (
            <div
              key={v.label}
              className="rounded-xl p-6 flex flex-col gap-3"
              style={{
                background: "oklch(1 0 0 / 4%)",
                border: "1px solid oklch(1 0 0 / 8%)",
              }}
            >
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                {v.label}
              </p>
              <p className="text-sm font-sans font-light leading-relaxed text-foreground/80">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="rounded-xl px-8 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        style={{
          background: "oklch(1 0 0 / 4%)",
          border: "1px solid oklch(1 0 0 / 8%)",
        }}
      >
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2">
            Start a project
          </p>
          <h2 className="text-2xl font-light tracking-wider">
            Let&apos;s make something together.
          </h2>
        </div>
        <Button render={<Link href="/contact" />} size="lg" className="shrink-0 gap-2">
          Get in touch
          <ArrowUpRight className="size-4" />
        </Button>
      </section>
    </main>
  );
}
