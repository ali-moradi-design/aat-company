"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/shared/ui/Logo";
import { SocialLinks } from "@/shared/ui/SocialLinks";
import { ArrowIcon } from "@/shared/ui/icons";
import { contact, menuNav, primaryNav } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";
import { useHeaderHeight } from "@/features/scroll-lock/useHeaderHeight";

/** `/` only ever matches exactly; deeper routes match their whole subtree. */
function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const headerRef = useHeaderHeight();

  // The overlay remembers the route it was opened on, so navigating (including
  // browser back/forward) closes it without an extra render pass.
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === pathname;
  const setOpen = (next: boolean) => setOpenedAt(next ? pathname : null);

  // Lock scroll while the overlay is open.
  useEffect(() => {
    document.documentElement.classList.toggle("has-menu-open", open);
    return () => document.documentElement.classList.remove("has-menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenedAt(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        ref={headerRef}
        data-open={open || undefined}
        className={cn(
          "row mb-g-half relative z-30 pt-10",
          open ? "text-white" : "text-black-500",
        )}
      >
        <div className="col-main flex items-end justify-between gap-8">
          <Link
            href="/"
            className="focus-ring shrink-0"
            aria-label="Go to the home page"
          >
            <Logo />
          </Link>

          <nav
            aria-label="Main"
            className="hidden flex-1 items-end pl-8 lg:flex"
          >
            <ul className="flex items-end gap-8">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={
                      isCurrent(pathname, item.href) ? "page" : undefined
                    }
                    className={cn(
                      "link focus-ring inline-flex items-center gap-[6px] text-16 leading-21",
                      isCurrent(pathname, item.href) && "link--underline",
                    )}
                  >
                    <span>{item.label}</span>
                    {item.withArrow && (
                      <ArrowIcon className="h-[11px] w-[13px]" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="focus-ring link shrink-0 text-16 leading-21"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/*
        Full-screen overlay. The header stays above it, so the logo and the
        close button remain visible and simply flip to white.
      */}
      <div
        id="site-menu"
        hidden={!open}
        className="fixed inset-0 z-20 flex flex-col overflow-hidden bg-black-500 text-white"
      >
        <div className="row h-full pt-[var(--header-height)]">
          <div className="col-main flex h-full min-h-0 flex-col">
            <nav
              aria-label="Menu"
              className="flex flex-1 flex-col justify-center"
            >
              <ul className="flex flex-col items-start gap-y-[clamp(2rem,6.5vh,3rem)]">
                {menuNav.map((item) => (
                  <li key={item.href} className="flex">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={
                        isCurrent(pathname, item.href) ? "page" : undefined
                      }
                      className="focus-ring inline-flex items-center gap-4 text-24 leading-9 text-grey-500 transition-colors duration-[600ms] hover:text-white"
                    >
                      <span>{item.label}</span>
                      {item.withArrow && (
                        <ArrowIcon className="h-[15px] w-[18px]" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-shrink-0 items-start justify-between gap-8 pb-8">
              <div className="flex flex-col gap-y-2">
                <a
                  href={`mailto:${contact.email}`}
                  className="focus-ring block text-16 leading-21 text-grey-500 transition-colors duration-[600ms] hover:text-white"
                >
                  {contact.email}
                </a>
                <a
                  href={contact.phoneHref}
                  className="focus-ring block text-16 leading-21 text-grey-500 transition-colors duration-[600ms] hover:text-white"
                >
                  {contact.phone}
                </a>
              </div>

              <SocialLinks variant="menu" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
