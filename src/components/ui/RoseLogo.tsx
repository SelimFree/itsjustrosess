import { cn } from "../../lib/utils";

export function RoseLogo({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("shrink-0", className)}
            aria-label="It's just Rosess Logo"
        >
            <circle cx="50" cy="70" r="22" fill="var(--color-accent-500)" opacity="0.9" />

            <circle cx="72" cy="48" r="22" fill="var(--color-primary-500)" opacity="0.9" />

            <circle cx="28" cy="48" r="22" fill="var(--color-secondary-400)" opacity="0.9" />

            <circle cx="50" cy="28" r="22" fill="var(--color-secondary-500)" opacity="0.9" />

            <circle cx="50" cy="48" r="14" fill="#ffffff" />

            <circle cx="50" cy="48" r="6" fill="var(--color-primary-700)" />

            <path
                d="M80 15C80 20 85 25 90 25C85 25 80 30 80 35C80 30 75 25 70 25C75 25 80 20 80 15Z"
                fill="var(--color-accent-200)"
            />
        </svg>
    );
}