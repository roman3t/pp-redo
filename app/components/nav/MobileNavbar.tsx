"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type NavItem = { label: string; number: string; href: string };

export function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Brand Strategy", number: "01", href: "#brand-strategy" },
      { label: "Personality", number: "02", href: "#personality" },
      { label: "Logo", number: "03", href: "#logo" },
      { label: "Color", number: "04", href: "#color" },
      { label: "Typography", number: "05", href: "#typography" },
      { label: "Art Direction", number: "06", href: "#art-direction" },
    ],
    []
  );

  // lock scroll cuando el drawer está abierto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC para cerrar
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="block tablet:hidden">
      {/* Top bar: 375w, 48h; inner content 343w (375-32) */}
      <div className="w-full bg-white">
        <div className="mx-auto w-[375px]">
          <div className="flex h-[48px] items-center justify-between px-[16px]">
            <div className="text-[18px] font-medium text-text-1">↩︎Redo</div>

            {/* Figma muestra 32x16 Hug */}
            <button
              type="button"
              className="h-[16px] w-[32px] text-[14px] leading-[16px] text-text-1"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {/* Drawer */}
      {open && (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* overlay gris */}
          <button
            type="button"
            className="absolute inset-0 bg-black/20"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
          />

          {/* panel: 343w, 416h; centrado como en tu captura */}
          <div className="absolute left-1/2 top-[48px] w-[343px] -translate-x-1/2 bg-white">
            {/* header del panel */}
            <div className="flex items-center justify-between px-[16px] pt-[16px]">
              <div className="text-[18px] font-medium text-text-1">↩︎Redo</div>

              <button
                type="button"
                className="text-[14px] leading-[16px] text-text-1"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            {/* divider */}
            <div className="mt-[12px] h-px w-full bg-divider-1/10" />

            {/* body */}
            <div className="px-[16px] pb-[20px] pt-[18px]">
              <nav>
                <ul className="flex flex-col gap-[22px]">
                  {navItems.map((item) => (
                    <li key={item.number}>
                      <Link
                        href={item.href}
                        className="flex items-baseline gap-1 text-text-1"
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-[16px] font-medium">
                          {item.label}
                        </span>
                        <span className="text-[10px] font-medium text-text-2">
                          {item.number}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* divider */}
              <div className="mt-[20px] h-px w-full bg-divider-1/10" />

              {/* footer actions */}
              <div className="mt-[18px] flex flex-col gap-[18px]">
                <Link
                  href="#download"
                  className="text-[14px] text-text-2"
                  onClick={() => setOpen(false)}
                >
                  Download
                </Link>
                <Link
                  href="#contact"
                  className="text-[14px] text-text-2"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
