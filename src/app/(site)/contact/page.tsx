'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 py-24">
      <div className="w-full max-w-xl">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Contact
          </p>
          <h1 className="text-4xl font-light tracking-wider">
            Let&apos;s work together
          </h1>
        </div>

        {submitted ? (
          <div
            className="rounded-xl p-8 text-center"
            style={{
              background: 'oklch(1 0 0 / 4%)',
              border: '1px solid oklch(1 0 0 / 8%)',
            }}
          >
            <p className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-2">
              Message sent
            </p>
            <p className="text-lg font-light">We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form
            action="https://formsubmit.co/tycheemail@pm.me"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="flex flex-col gap-5"
          >
            {/* honeypot */}
            <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="" />

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="font-mono text-xs tracking-widest uppercase text-muted-foreground"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg px-4 py-3 text-sm bg-transparent outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-ring"
                style={{
                  background: 'oklch(1 0 0 / 4%)',
                  border: '1px solid oklch(1 0 0 / 8%)',
                }}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="font-mono text-xs tracking-widest uppercase text-muted-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-lg px-4 py-3 text-sm bg-transparent outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-ring"
                style={{
                  background: 'oklch(1 0 0 / 4%)',
                  border: '1px solid oklch(1 0 0 / 8%)',
                }}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="font-mono text-xs tracking-widest uppercase text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full rounded-lg px-4 py-3 text-sm bg-transparent outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-ring resize-none"
                style={{
                  background: 'oklch(1 0 0 / 4%)',
                  border: '1px solid oklch(1 0 0 / 8%)',
                }}
              />
            </div>

            <Button type="submit" size="lg" className="self-start gap-2">
              Send message
              <ArrowUpRight className="size-4" />
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
