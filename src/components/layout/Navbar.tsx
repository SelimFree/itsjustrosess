import { type ComponentProps, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";
import type { NavLinkItem } from "./Layout";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { RoseLogo } from "../ui/RoseLogo";

export interface NavbarProps extends ComponentProps<"header"> {
  links: NavLinkItem[];
}

export function Navbar({ links, className, ...props }: NavbarProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(location.pathname);

  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setIsOpen(false);
  }

  const navItemClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "group relative px-4 py-2 text-sm md:text-base font-display font-medium transition-all duration-300 rounded-full hover:scale-105 active:scale-95",
      isActive
        ? "bg-white text-primary-600 shadow-sm"
        : "text-white/90 hover:bg-white/20 hover:text-white"
    );

  const mobileNavItemClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "block w-full rounded-2xl px-4 py-3 text-lg font-display font-medium transition-all duration-300 active:scale-95",
      isActive
        ? "bg-white text-primary-600 shadow-sm"
        : "text-white/80 hover:bg-white/20 hover:text-white"
    );

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[2px] md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

<header
        className={cn(
          "fixed top-0 left-0 md:left-1/2 md:-translate-x-1/2 z-50 w-full transition-all duration-500 ease-in-out md:top-4 md:w-[95%] md:max-w-6xl md:rounded-full bg-primary-500/90 backdrop-blur-xl shadow-sm border-b md:border border-white/20 h-18 md:h-20",
          className
        )}
        {...props}
      >
        <div className="flex h-full w-full items-center justify-between px-2 md:px-4">

          <div className="relative h-full flex items-center w-auto">
            <Link
              to="/"
              className="relative z-10 flex h-full items-center gap-3 px-2 outline-none group rounded-full focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => setIsOpen(false)}
            >
              <div className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-12 group-active:scale-95">
                <RoseLogo className="h-10 w-10 md:h-12 md:w-12 drop-shadow-sm" />
              </div>

              <span className="font-display font-bold text-lg md:text-xl text-white tracking-wide transition-colors group-hover:text-white/90">
                It's just <span className="text-secondary-200">Rosess</span>
              </span>
            </Link>
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-2 md:flex lg:gap-4">
            {links.map((link) => (
              <NavLink key={link.href} to={link.href} className={navItemClasses}>
                {t(`navbar.${link.label}`)}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex h-full items-center gap-2 pr-2 md:pr-0">
            <LanguageSwitcher />

            <Button
              variant="ghost"
              size="sm"
              className="px-2 rounded-full hover:bg-white/20 active:scale-90 md:hidden transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <div className={cn("transition-transform duration-500", isOpen ? "rotate-180" : "rotate-0")}>
                {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
              </div>
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "absolute left-2 right-2 top-[calc(100%+0.5rem)] rounded-3xl bg-primary-600/98 backdrop-blur-xl transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-top shadow-xl md:hidden overflow-hidden",
            isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-2 p-4">
            {links.map((link) => (
              <div
                key={link.href}
                className={cn(
                  "transition-all duration-500 delay-100",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
              >
                <NavLink
                  to={link.href}
                  className={mobileNavItemClasses}
                  onClick={() => setIsOpen(false)}
                >
                  {t(`navbar.${link.label}`)}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}