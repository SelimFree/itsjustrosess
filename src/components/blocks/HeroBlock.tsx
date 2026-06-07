import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Image } from "../ui/Image";
import { useTranslation } from "react-i18next";
import { FadeIn } from "../utils/FadeIn";

export function HeroBlock() {
  const { t } = useTranslation("home");

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-accent-50 pt-20 md:pt-32 pb-32 md:pb-48">

      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
        <div className="absolute top-40 -right-20 w-120 h-120 bg-secondary-200/30 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-6 md:py-0 lg:px-8">
        <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            <div className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm mb-6 text-secondary-600 font-bold text-sm tracking-widest uppercase">
              <Sparkles className="h-4 w-4" />
              {t("HeroBlock.tagline")}
            </div>

            <FadeIn delay={150} direction="left">
              <Heading
                level={1}
                className="text-5xl sm:text-6xl lg:text-7xl font-display tracking-tight text-gray-900 leading-[1.1] drop-shadow-sm mb-6"
              >
                {t("HeroBlock.title")}
              </Heading>
            </FadeIn>


            <FadeIn delay={300} direction="left">
              <Text className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed mb-10">
                {t("HeroBlock.subtitle")}
              </Text>
            </FadeIn>

            <FadeIn delay={450} direction="left">
              <Link to="/about" className="outline-none group">
                <Button className="gap-3 px-8 py-6 rounded-full bg-primary-500 text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:bg-primary-600 hover:scale-105 active:scale-95 text-lg font-bold">
                  {t("HeroBlock.cta")}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </FadeIn>
          </div>

          <div className="relative w-full max-w-lg mx-auto lg:max-w-none opacity-0 animate-fade-in-up [animation-delay:600ms]">

            <div className="relative aspect-square w-full overflow-hidden animate-morph bg-secondary-100 border-8 border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1445308124430-8357b98a6f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt={t("HeroBlock.imageAlt")}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-secondary-500/20 to-transparent mix-blend-overlay" />
            </div>

            <svg className="absolute -top-6 -right-6 w-16 h-16 text-primary-400 animate-[bounce_4s_infinite]" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0L56 38L95 25L65 56L95 87L56 74L50 112L44 74L5 87L35 56L5 25L44 38L50 0Z" />
            </svg>
            <svg className="absolute -bottom-10 -left-10 w-24 h-24 text-secondary-400 animate-[bounce_5s_infinite_reverse]" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0L56 38L95 25L65 56L95 87L56 74L50 112L44 74L5 87L35 56L5 25L44 38L50 0Z" />
            </svg>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-20 left-0 w-full overflow-hidden bg-primary-500 py-3 rotate-1 scale-105 z-40 border-y-4 border-white shadow-xl">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-xl font-display font-bold tracking-widest text-white mx-4 uppercase">
            {t("HeroBlock.marquee")}
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 z-30 transform translate-y-px">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-20 md:h-30"
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
    </section>
  );
}