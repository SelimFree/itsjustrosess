import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "./Button";
import { Text } from "./Text";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    return (
        <div
            className={cn(
                "fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-sm z-50 transition-all duration-700 transform origin-bottom-left",
                "ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-12 scale-90 opacity-0 pointer-events-none"
            )}
        >
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl border-2 border-white flex flex-col gap-5 relative overflow-hidden">
                
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

                <div className="flex items-start gap-4 relative z-10">
                    <div className="bg-primary-100 p-3 rounded-full shrink-0 animate-[bounce_3s_infinite]">
                        <Cookie className="h-7 w-7 text-primary-500" />
                    </div>

                    <div className="space-y-1.5 pr-6">
                        <Text className="text-gray-900 font-display text-xl tracking-wide">
                            {t("cookieBanner.title")}
                        </Text>
                        <Text className="text-gray-600 text-sm leading-relaxed">
                            {t("cookieBanner.body")}
                        </Text>
                    </div>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute -top-1 -right-1 text-gray-400 hover:text-secondary-500 hover:rotate-90 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-secondary-300 rounded-full p-1"
                        aria-label="Close banner"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="flex items-center gap-3 relative z-10">
                    <Button 
                        size="sm" 
                        onClick={acceptCookies} 
                        className="px-6 rounded-full bg-primary-500 text-white hover:bg-primary-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
                    >
                        {t("cookieBanner.accept")}
                    </Button>

                    <Link to="/cookies" onClick={() => setIsVisible(false)} className="outline-none">
                        <Button 
                            variant="ghost" 
                            size="sm"
                            className="px-4 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            {t("cookieBanner.more")}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}