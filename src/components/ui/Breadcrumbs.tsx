import { useLocation, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";

export function Breadcrumbs({ className }: { className?: string }) {
    const location = useLocation();
    const { t } = useTranslation();

    const pathnames = location.pathname.split("/").filter((x) => x);

    if (pathnames.length === 0) return null;

    return (
        <nav
            aria-label="Breadcrumb"
            className={cn("py-4 md:py-6", className)}
        >
            <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="inline-flex items-center rounded-full bg-white/40 backdrop-blur-md px-4 py-2 border border-white/50 shadow-sm">
                    <Link
                        to="/"
                        className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-md px-1"
                    >
                        {t("navbar.home", "Home")}
                    </Link>

                    {pathnames.map((value, index) => {
                        const isLast = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                        const defaultLabel = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');
                        const label = t(`navbar.${value}`, defaultLabel);

                        return (
                            <div key={to} className="flex items-center">
                                <ChevronRight className="h-4 w-4 text-gray-400 mx-1" aria-hidden="true" />

                                {isLast ? (
                                    <span 
                                        className="text-sm font-display font-medium text-secondary-600 px-1" 
                                        aria-current="page"
                                    >
                                        {label}
                                    </span>
                                ) : (
                                    <Link
                                        to={to}
                                        className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-md px-1"
                                    >
                                        {label}
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}