"use client"

import { NavbarProvider } from './NavContext';
import { NavbarContent } from './NavbarContent';

export const Navbar = () => {

  return (
    <NavbarProvider>
      <NavbarContent />
    </NavbarProvider>
  );
};

