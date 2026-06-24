'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavbarContext } from '@/components/NavbarContext';

type NavItem = {
  _key: string;
  label: string;
  href: string;
  openInNewTab?: boolean;
};

export default function NavMobileMenu({ items }: { items: NavItem[] }) {
  const { setMenuOpen } = useNavbarContext();

  return (
    <div className="flex md:hidden">
      <DropdownMenu onOpenChange={setMenuOpen}>
        <DropdownMenuTrigger
          className="flex items-center justify-center text-white focus:outline-none"
          aria-label="Open menu"
        >
          <Menu size={22} strokeWidth={1.5} />
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          sideOffset={12}
          className="min-w-48 rounded-xl border-white/10 p-2 shadow-2xl"
          style={{
            background: 'oklch(0.06 0 0 / 80%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {items.map((item, i) => (
            <DropdownMenuItem
              key={item._key ?? `menu-${i}`}
              render={
                <Link
                  href={item.href}
                  target={item.openInNewTab ? '_blank' : undefined}
                  rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
                />
              }
              className="nav-link rounded-lg px-3 py-2.5 text-sm tracking-widest uppercase text-white/90 hover:text-white focus:bg-white/8 focus:text-white cursor-pointer"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
