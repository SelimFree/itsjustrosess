import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

export default function ServerErrorPage() {
  const { t } = useTranslation();
  
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] py-24 px-6 text-center overflow-hidden">
      
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-danger-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-danger-100 mb-8 animate-[bounce_3s_infinite] shadow-sm border-4 border-white">
        <AlertTriangle className="h-10 w-10 text-danger-500" strokeWidth={2.5} />
      </div>
      
      <Heading 
        level={1} 
        className="text-4xl md:text-5xl font-display tracking-tight text-gray-900"
      >
        {t("errorPage.title")}
      </Heading>
      
      <Text className="mt-5 text-lg md:text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
        {t("errorPage.subtitle")}
      </Text>

      <div className="mt-10">
        <Button 
          onClick={() => window.location.reload()} 
          className={cn(
            "group gap-2 px-8 py-6 rounded-full bg-white text-danger-600 shadow-md border-2 border-danger-100",
            "transition-all duration-300 hover:bg-danger-50 hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-danger-200"
          )}
        >
          <RefreshCw className="h-5 w-5 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-180" />
          <span className="font-medium text-lg">{t("errorPage.refreshBtn")}</span>
        </Button>
      </div>
    </div>
  );
}