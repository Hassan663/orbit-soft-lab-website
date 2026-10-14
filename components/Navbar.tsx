"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";
import Logo from "./Logo";
import { navLinks } from "@/data/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const next = window.scrollY > 40;
      // only re-render when the 40px threshold is crossed, not on every scroll event
      setScrolled((prev) => (prev === next ? prev : next));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`animate-nav-in fixed inset-x-0 z-50 [contain:layout] px-4 transition-transform duration-300 sm:px-8 ${
        scrolled ? "top-5 -translate-y-2 sm:top-10 sm:-translate-y-5" : "top-5 sm:top-10"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1292px] items-center justify-between rounded-[20px] border border-lime/25 px-6 shadow-header transition-[height,background-color,backdrop-filter] duration-300 sm:px-10 ${
          scrolled
            ? "h-[64px] bg-[rgba(19,21,20,0.85)] backdrop-blur-[22px] sm:h-[72px]"
            : "h-[70px] bg-[rgba(19,21,20,0.75)] backdrop-blur-[15px] sm:h-[85px]"
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`nav-link ${active ? "nav-link-active text-gradient" : "text-body hover:text-lime"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="btn-primary hidden !h-[43px] !px-6 font-bold lg:inline-flex">
          Get Started
        </Link>

        <button
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mx-auto mt-2 max-w-[1292px] rounded-[20px] border border-lime/25 bg-ink p-6 shadow-header transition-[opacity,transform] duration-300 lg:hidden ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? undefined : -1}
              aria-current={isActive(pathname, l.href) ? "page" : undefined}
              className={isActive(pathname, l.href) ? "text-gradient font-medium" : "text-body transition-colors hover:text-lime"}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} tabIndex={open ? undefined : -1} className="btn-primary h-11">
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
