import { useTranslation } from "react-i18next";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { cn } from "../lib/utils";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  content: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, content }: LegalPageProps) {
  const { t } = useTranslation("legal");

  return (
    <div className="relative overflow-hidden py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-accent-100/40 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-3xl bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
        <header className="mb-10 border-b border-gray-100 pb-8 text-center md:text-left">
          <Heading 
            level={1} 
            className="mb-3 font-display tracking-wide text-primary-600 text-3xl md:text-4xl"
          >
            {title}
          </Heading>
          <Text variant="muted" className="text-sm font-medium text-gray-400">
            {t("custom.lastUpdatedLabel")} {lastUpdated}
          </Text>
        </header>
        
        <div className={cn(
          "prose prose-gray max-w-none space-y-6 text-gray-600",
          "prose-headings:font-display prose-headings:text-gray-800 prose-headings:font-normal",
          "prose-h2:text-2xl prose-h2:mt-10",
          "prose-a:text-secondary-500 prose-a:font-medium prose-a:no-underline hover:prose-a:text-secondary-600 hover:prose-a:underline prose-a:transition-all",
          "prose-ul:list-disc prose-ul:pl-5",
          "prose-li:marker:text-primary-400",
          "prose-strong:text-gray-800 prose-strong:font-bold"
        )}>
          {content}
        </div>
      </div>
    </div>
  );
}