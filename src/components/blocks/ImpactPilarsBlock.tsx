import { Sprout, BookOpen, HeartHandshake } from "lucide-react";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";
import { FadeIn } from "../utils/FadeIn";

const pillars = [
  {
    icon: Sprout,
    titleKey: "ImpactPillarsBlock.planting.title",
    descKey: "ImpactPillarsBlock.planting.desc",
    colorClass: "bg-accent-100 text-accent-600 shadow-accent-500/10",
    blobClass: "rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
  },
  {
    icon: BookOpen,
    titleKey: "ImpactPillarsBlock.education.title",
    descKey: "ImpactPillarsBlock.education.desc",
    colorClass: "bg-primary-100 text-primary-600 shadow-primary-500/10",
    blobClass: "rounded-[60%_40%_30%_70%/50%_60%_40%_50%]",
  },
  {
    icon: HeartHandshake,
    titleKey: "ImpactPillarsBlock.community.title",
    descKey: "ImpactPillarsBlock.community.desc",
    colorClass: "bg-secondary-100 text-secondary-600 shadow-secondary-500/10",
    blobClass: "rounded-[50%_50%_70%_30%/40%_40%_60%_60%]",
  },
];

export function ImpactPillarsBlock() {
  const { t } = useTranslation("home");

  return (
    <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

        <FadeIn className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <Heading level={2} className="text-4xl md:text-5xl font-display tracking-wide text-gray-900 mb-6 drop-shadow-sm">
            {t("ImpactPillarsBlock.sectionTitle")}
          </Heading>
          <Text className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {t("ImpactPillarsBlock.sectionSubtitle")}
          </Text>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <FadeIn
                delay={index * 150}
                direction="up"
                key={index}
                className="group flex flex-col items-center text-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-4"
              >
                <div
                  className={cn(
                    "flex items-center justify-center w-32 h-32 mb-8 shadow-xl transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110",
                    pillar.colorClass,
                    pillar.blobClass
                  )}
                >
                  <Icon className="w-14 h-14" strokeWidth={1.5} />
                </div>

                <Heading level={3} className="text-2xl font-display text-gray-900 mb-4 transition-colors duration-300 group-hover:text-primary-600">
                  {t(pillar.titleKey)}
                </Heading>

                <Text className="text-gray-600 leading-relaxed max-w-sm text-lg">
                  {t(pillar.descKey)}
                </Text>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}