'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { NavbarContext } from './NavbarContext';

const HIDE_DELAY_MS = 3000;

export default function NavbarWrapper({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuOpen = useRef(false);

  useEffect(() => {
    const scheduleHide = () => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        if (!menuOpen.current) setVisible(false);
      }, HIDE_DELAY_MS);
    };

    const show = () => {
      setVisible(true);
      scheduleHide();
    };

    scheduleHide();

    const onScroll = () => show();
    const onMouseMove = (e: MouseEvent) => {
      if (e.clientY < 80) show();
      else scheduleHide();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const setMenuOpen = useCallback((open: boolean) => {
    menuOpen.current = open;
    if (open) {
      if (timer.current) clearTimeout(timer.current);
      setVisible(true);
    }
  }, []);

  return (
    <NavbarContext.Provider value={{ setMenuOpen }}>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {children}
      </div>
    </NavbarContext.Provider>
  );
}
