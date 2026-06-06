import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { Text } from "../ui/Text";
import { cn } from "../../lib/utils";
import { useAppContext } from "../../context/AppContext";

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { languages } = useAppContext();

    const currentLang = languages.find((lang) => i18n.language?.startsWith(lang.code)) || languages[0];

    const handleLanguageChange = (code: string) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    if (languages.length <= 1) {
        return null;
    }

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <Button
                type="button"
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full px-3 py-2 transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                id="language-menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <Globe className="h-4 w-4 text-white transition-transform duration-500 group-hover:rotate-12" strokeWidth={2} />
                <Text className="hidden text-left text-sm font-display font-medium text-white sm:inline-block">
                    {currentLang.label}
                </Text>
                <ChevronDown className={cn("h-4 w-4 text-white/80 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]", isOpen ? "rotate-180" : "")} />
            </Button>

            <div
                className={cn(
                    "absolute right-0 z-50 mt-2 w-28 origin-top-right rounded-2xl bg-white/95 backdrop-blur-md p-1.5 shadow-xl border border-white transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                    isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 -translate-y-2 pointer-events-none"
                )}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="language-menu-button"
            >
                <div className="flex flex-col gap-1" role="none">
                    {languages.map((lang) => {
                        const isActive = currentLang.code === lang.code;
                        return (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={cn(
                                    "flex w-full items-center rounded-xl px-3 py-2 text-left transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary-300 active:scale-95",
                                    isActive
                                        ? "bg-primary-100 text-primary-700 shadow-sm"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                )}
                                role="menuitem"
                            >
                                <Text className={cn("text-sm font-display font-medium w-full text-center", isActive && "font-bold")}>
                                    {lang.label}
                                </Text>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}