import Link from "next/link";
import Logo from "./Logo";
import Stagger from "./motion/Stagger";
import StaggerItem from "./motion/StaggerItem";
import { footerBottomLinks, footerColumns } from "@/data/site";

export default function Footer() {
  return (
    <footer className="cv-auto [contain-intrinsic-size:auto_420px] border-t border-white/5 py-14">
      <div className="container-x">
        <Stagger className="grid gap-12 lg:grid-cols-4">
          <StaggerItem>
            <Logo />
            <p className="mt-6 max-w-[268px] text-[14px] leading-6 text-body">
              Building the future of digital excellence through innovative solutions and cutting-edge technology.
            </p>
          </StaggerItem>
          {footerColumns.map((c) => (
            <StaggerItem key={c.heading}>
              <h4 className="font-heading text-[16px] font-semibold">{c.heading}</h4>
              <ul className="mt-6 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="footer-link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-[14px] text-body sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Orbit Soft Lab. All rights reserved. Crafted with passion.</p>
          <div className="flex gap-6">
            {footerBottomLinks.map((l) => (
              <Link key={l.href} href={l.href} className="footer-link">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
