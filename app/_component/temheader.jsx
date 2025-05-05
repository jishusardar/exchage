"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Hero from "./hero";
import Footer from "./footer";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export function Headerres() {
  const navItems = [
    {
      name: "About",
      link: "#features",
    },
    {
      name: "Service",
      link: "#pricing",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {user,isSignedIn}=useUser();

  return (
    <div>
        <div>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {isSignedIn? <UserButton/>: <Link href={'/sign-in'}><NavbarButton variant="primary">Signin</NavbarButton></Link> }
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className={'p-1.5'}>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <Link href={'/sign-in'}>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Signup
              </NavbarButton>
              </Link>
              <Link href={'/sign-in'}>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full">
                Signin
              </NavbarButton>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      </div>
      <Hero/>
      <Footer/>
    </div>
  );
};