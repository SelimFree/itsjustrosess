import { cn } from "../../lib/utils";
import { Text } from "./Text";
import { useTranslation } from "react-i18next";

export function Loading({ className }: { className?: string }) {
  const { t } = useTranslation("common");

  return (
    <div className={cn("flex min-h-[60vh] w-full flex-col items-center justify-center bg-transparent", className)}>
      <div className="flex flex-col items-center gap-6">

        <div className="flex gap-2.5">
          <div
            className="h-4 w-4 rounded-full bg-primary-500 animate-bounce shadow-sm"
            style={{ animationDelay: '0ms' }}
          />
          <div
            className="h-4 w-4 rounded-full bg-secondary-500 animate-bounce shadow-sm"
            style={{ animationDelay: '150ms' }}
          />
          <div
            className="h-4 w-4 rounded-full bg-accent-500 animate-bounce shadow-sm"
            style={{ animationDelay: '300ms' }}
          />
        </div>

        <Text className="text-base font-display tracking-wide text-gray-500">
          {t("loading:message", "Loading...")}
        </Text>

      </div>
    </div>
  );
}