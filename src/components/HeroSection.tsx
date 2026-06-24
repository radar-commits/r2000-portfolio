"use client";

import Link from "next/link";
import MetallicPaint from "./MetallicPaint";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowUpRight } from "lucide-react";
import SplitText from "./SplitText";

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-10 px-4">
      <a href="./case-studies/tychee" className="max-w-[85vw] sm:max-w-none">
        <Badge
          variant="outline"
          className="h-auto whitespace-normal text-center leading-snug py-1.5 px-3"
        >
          tychee&apos;s &apos; new, upgraded link in bio&apos; experience. Read
          Case Study
          <span className="inline-flex shrink-0 items-center">
            <ArrowUpRight className="size-4 sm:size-3" />
          </span>
        </Badge>
      </a>

      <div style={{ width: "340px", aspectRatio: "2721 / 2153" }}>
        <MetallicPaint
          imageSrc="/logo.svg"
          lightColor="#ffffff"
          darkColor="#0a0a0a"
          tintColor="#ffffff"
          speed={0.25}
          brightness={2.2}
          contrast={0.55}
          chromaticSpread={1.8}
          scale={4}
          noiseScale={0.4}
        />
      </div>

      <SplitText
        text="r2000 is a creative studio"
        tag="h1"
        className="text-3xl font-light tracking-widest"
        splitType="chars"
        delay={40}
        duration={1.2}
        ease="power3.out"
        from={{ opacity: 0, y: 30 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="0px"
        textAlign="center"
      />

      <div className="flex gap-4">
        <Link href="/case-studies">
          <Button size="lg">Our work</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" size="lg">
            Get in touch
          </Button>
        </Link>
      </div>
    </section>
  );
}
