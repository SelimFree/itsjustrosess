import { Link } from "react-router-dom";
import { FileQuestion, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

export default function NotFoundPage() {
  const { t } = useTranslation();
  
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] py-48 px-6 text-center overflow-hidden">
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary-100 mb-8 animate-[bounce_3s_infinite] shadow-sm">
        <FileQuestion className="h-12 w-12 text-primary-500" />
      </div>
      
      <Heading 
        level={1} 
        className="text-8xl sm:text-9xl font-display tracking-tight text-primary-500 drop-shadow-sm"
      >
        {t("notFoundPage.title")}
      </Heading>
      
      <Heading 
        level={3} 
        className="mt-6 text-2xl md:text-3xl font-display text-gray-800"
      >
        {t("notFoundPage.subtitle")}
      </Heading>
      
      <Text className="whitespace-pre-line mt-4 text-gray-600 max-w-md mx-auto text-lg leading-relaxed">
        {t("notFoundPage.body")}
      </Text>

      <div className="mt-10">
        <Link to="/" className="outline-none group">
          <Button 
            className={cn(
              "gap-2 px-8 py-6 rounded-full bg-secondary-500 text-white shadow-md border-2 border-transparent",
              "transition-all duration-300 hover:bg-secondary-600 hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-secondary-300"
            )}
          >
            <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="font-medium text-lg">{t("notFoundPage.returnBtn")}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}