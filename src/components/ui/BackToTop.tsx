import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./Button";
import { cn } from "../../lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div 
      className={cn(
        "fixed bottom-6 right-4 md:bottom-8 md:right-8 z-40 transition-all duration-500",
        "ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-50 opacity-0 pointer-events-none"
      )}
    >
      <Button 
        onClick={scrollToTop}
        size="sm"
        className={cn(
          "group flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full",
          "bg-secondary-500 text-white shadow-lg border-2 border-white",
          "transition-all duration-300 hover:bg-secondary-600 hover:-translate-y-2 hover:shadow-xl hover:scale-110 active:scale-90",
          "focus-visible:ring-4 focus-visible:ring-secondary-300 outline-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6 md:h-7 md:w-7 transition-transform duration-300 group-hover:-translate-y-1" />
      </Button>
    </div>
  );
}