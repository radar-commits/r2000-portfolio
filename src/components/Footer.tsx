import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaBehance,
} from "react-icons/fa6";
import { client } from "@/sanity/lib/client";
import { FOOTER_QUERY, type FooterData } from "@/sanity/lib/queries";

const SOCIAL_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  instagram: FaInstagram,
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
  github: FaGithub,
  youtube: FaYoutube,
  dribbble: FaDribbble,
  behance: FaBehance,
  website: Globe,
};

export default async function Footer() {
  const footer = await client.fetch<FooterData | null>(
    FOOTER_QUERY,
    {},
    { next: { revalidate: 3600 } },
  );

  const menuItems = footer?.menuItems ?? [];
  const socialLinks = footer?.socialLinks ?? [];

  return (
    <footer className="px-4 pb-4">
      <div
        className="flex flex-col sm:flex-row items-start justify-between gap-10 px-8 py-8 rounded-xl"
        style={{
          background: "oklch(0 0 0)",
          border: "1px solid oklch(1 0 0 / 8%)",
        }}
      >
        <div className="flex flex-col gap-5">
          <Link href="/" style={{ color: "inherit" }}>
            <Image
              src="/logo.svg"
              alt="r2000 logo"
              width={100}
              height={32}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          {socialLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {socialLinks.map((link, i) => {
                const Icon = SOCIAL_ICONS[link.platform] ?? Globe;
                return (
                  <Link
                    key={link._key ?? `social-${i}`}
                    href={link.href}
                    target={link.openInNewTab ? "_blank" : undefined}
                    rel={link.openInNewTab ? "noopener noreferrer" : undefined}
                    className="nav-link"
                    aria-label={link.platform}
                  >
                    <Icon className="size-4" />
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {menuItems.length > 0 && (
          <ul className="flex flex-col gap-3 list-none m-0 p-0">
            {menuItems.map((item, i) => (
              <li key={item._key ?? `footer-link-${i}`}>
                <Link
                  href={item.href}
                  target={item.openInNewTab ? "_blank" : undefined}
                  rel={item.openInNewTab ? "noopener noreferrer" : undefined}
                  className="nav-link text-sm tracking-wide uppercase"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
