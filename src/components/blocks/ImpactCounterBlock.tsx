import { useEffect, useState, useRef } from "react";
import { Users, Sprout, Sparkles } from "lucide-react";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";
import { FadeIn } from "../utils/FadeIn";

interface CounterItemProps {
    end: number;
    suffix?: string;
    label: string;
    icon: React.ElementType;
    delay?: number;
}

function CounterItem({ end, suffix = "", label, icon: Icon, delay = 0 }: CounterItemProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp: number | null = null;
        const duration = 2000;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [isVisible, end]);

    return (
        <div ref={ref} className="flex flex-col items-center text-center group">
            <div className="relative flex items-center justify-center w-24 h-24 mb-6 bg-white/20 text-white rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-12">
                <Icon className="w-10 h-10 drop-shadow-sm" strokeWidth={2} />
                <div className={cn(
                    "absolute -top-4 -right-4 text-white transition-all duration-700",
                    count === end ? "opacity-100 scale-100" : "opacity-0 scale-0"
                )}>
                    <Sparkles className="w-8 h-8 animate-pulse" />
                </div>
            </div>

            <div className="flex items-baseline justify-center gap-1">
                <span className="text-6xl md:text-7xl font-display font-bold text-white drop-shadow-md">
                    {count}
                </span>
                <span className="text-4xl md:text-5xl font-display font-bold text-white/80">
                    {suffix}
                </span>
            </div>

            <Text className="mt-4 text-xl font-medium text-white/90 max-w-50 leading-snug">
                {label}
            </Text>
        </div>
    );
}

export function ImpactCounter() {
    const { t } = useTranslation();

    return (
        <section className="relative w-full bg-primary-500 py-32 md:py-48 overflow-hidden z-20 -mt-1 md:-mt-2">
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 rotate-180 z-10 pointer-events-none">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-12 md:h-24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,192.39,101.4,236.4,88.75,279.4,72.23,321.39,56.44Z"
                        fill="var(--color-gray-50)"
                    />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                <FadeIn className="text-center max-w-3xl mx-auto mb-20">
                    <Heading level={2} className="text-4xl md:text-5xl font-display tracking-wide text-white mb-6 drop-shadow-sm">
                        {t("counter.title", "Small seeds, huge impact.")}
                    </Heading>
                    <Text className="text-lg md:text-xl text-white/90 leading-relaxed">
                        {t("counter.subtitle", "Look at what we've accomplished together this semester. Every single pair of hands makes a difference.")}
                    </Text>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 justify-items-center">
                    <CounterItem
                        icon={Sprout}
                        end={540}
                        suffix="+"
                        label={t("counter.plants", "Trees & Seedlings Planted")}
                        delay={0}
                    />
                    <CounterItem
                        icon={Users}
                        end={125}
                        label={t("counter.volunteers", "Active Student Volunteers")}
                        delay={200}
                    />
                    <CounterItem
                        icon={Sparkles}
                        end={850}
                        suffix="h"
                        label={t("counter.hours", "Community Hours Donated")}
                        delay={400}
                    />
                </div>

            </div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-20 left-10 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}