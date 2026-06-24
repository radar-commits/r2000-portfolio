'use client';

import { createContext, useContext } from 'react';

type NavbarContextValue = {
  setMenuOpen: (open: boolean) => void;
};

export const NavbarContext = createContext<NavbarContextValue>({
  setMenuOpen: () => {},
});

export const useNavbarContext = () => useContext(NavbarContext);
