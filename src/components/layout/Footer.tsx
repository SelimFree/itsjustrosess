import { type ComponentProps } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Text } from "../ui/Text";
import { List, ListItem } from "../ui/List";
import type { NavLinkItem } from "./Layout";
import { RoseLogo } from "../icons/RoseLogo";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/AppContext";

export interface FooterProps extends ComponentProps<"footer"> {
  links: NavLinkItem[];
}

export function Footer({ links, className, ref, ...props }: FooterProps) {
  const { t } = useTranslation();
  const { companyName } = useAppContext();

  return (
    <footer
      ref={ref}
      className={cn(
        "mt-12 bg-primary-500 rounded-t-[2.5rem] md:rounded-t-[5rem] overflow-hidden text-white/90 shadow-lg",
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          <div className="md:col-span-2 lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="group flex cursor-pointer items-center gap-4 outline-none focus-visible:ring-2 focus-visible:ring-white rounded-3xl p-2 -ml-2">
              <div className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-rotate-12 group-active:scale-95">
                <RoseLogo className="h-16 w-16 md:h-20 md:w-20 drop-shadow-md" />
              </div>
              
              <div className="flex flex-col items-start justify-center">
                <span className="font-display font-bold text-2xl md:text-3xl text-white tracking-wide transition-colors group-hover:text-white/90 leading-tight">
                  It's Just <br className="hidden lg:block xl:hidden" />
                  <span className="text-secondary-200">Rosess</span>
                </span>
              </div>
            </Link>
            
            <Text
              className="mt-6 max-w-sm text-base md:text-lg font-medium leading-relaxed text-white/90"
            >
              {t("footer.slogan")}
            </Text>
          </div>

          <div className="flex flex-col items-center md:items-start lg:col-start-4 lg:items-end text-center md:text-left lg:text-right">
            <Text className="mb-6 text-xl font-display tracking-wide text-white drop-shadow-sm">
              {t("footer.quickLinks")}
            </Text>

            <List className="flex flex-col gap-y-3 space-y-0 w-full items-center md:items-start lg:items-end">
              {links.map((link) => (
                <ListItem key={link.href} icon={null} className="p-0">
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-base font-medium text-white/80 transition-all duration-300 hover:text-white hover:translate-x-2 lg:hover:-translate-x-2 outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md px-2 py-1 -mx-2"
                  >
                    <span className="h-2 w-2 rounded-full bg-secondary-400 scale-0 transition-transform duration-300 group-hover:scale-100 lg:hidden" />
                    {t(`navbar.${link.label}`)}
                    <span className="h-2 w-2 rounded-full bg-secondary-400 scale-0 transition-transform duration-300 group-hover:scale-100 hidden lg:block" />
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>

          <div className="flex flex-col items-center md:items-start lg:items-end text-center md:text-left lg:text-right">
            <Text className="mb-6 text-xl font-display tracking-wide text-white drop-shadow-sm">
              {t("footer.legal")}
            </Text>

            <List className="flex flex-col gap-y-3 space-y-0 w-full items-center md:items-start lg:items-end">
              {["privacy", "terms", "cookie"].map((item) => (
                <ListItem key={item} icon={null} className="p-0">
                  <Link
                    to={`/${item}`}
                    className="group flex items-center gap-2 text-base font-medium text-white/80 transition-all duration-300 hover:text-white hover:translate-x-2 lg:hover:-translate-x-2 outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md px-2 py-1 -mx-2"
                  >
                     <span className="h-2 w-2 rounded-full bg-secondary-400 scale-0 transition-transform duration-300 group-hover:scale-100 lg:hidden" />
                    {t(`footer.${item}`)}
                    <span className="h-2 w-2 rounded-full bg-secondary-400 scale-0 transition-transform duration-300 group-hover:scale-100 hidden lg:block" />
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t-2 border-white/20 pt-8 md:flex-row pb-4">
          <Text
            className="text-sm font-display tracking-wider text-white/80 text-center"
          >
            {t("footer.rights", { year: new Date().getFullYear(), company: companyName })}
          </Text>
        </div>
      </div>
    </footer>
  );
}