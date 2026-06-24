import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import NavMobileMenu from "@/components/NavMobileMenu";

type NavItem = {
  _key: string;
  label: string;
  href: string;
  openInNewTab?: boolean;
};

export default async function Navbar() {
  const data = await client.fetch<{ items?: NavItem[] } | null>(
    `*[_type == "navigation"][0]{ items[]{ _key, label, href, openInNewTab } }`,
    {},
    { next: { revalidate: 3600 } }
  );
  const items = data?.items ?? [];

  return (
    <header>
      <nav
        className="flex items-center justify-between px-6 py-4 mx-4 mt-4 rounded-xl"
        style={{
          background: "oklch(1 0 0 / 4%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid oklch(1 0 0 / 8%)",
        }}
      >
        <Link href="/" className="flex items-center shrink-0" style={{ color: "inherit" }}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={32}
            priority
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {items.length > 0 && (
          <>
            <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
              {items.map((item, i) => (
                <li key={item._key ?? `nav-${i}`}>
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
            <NavMobileMenu items={items} />
          </>
        )}
      </nav>
    </header>
  );
}
