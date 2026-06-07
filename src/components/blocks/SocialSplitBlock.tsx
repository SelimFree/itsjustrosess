import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { useTranslation } from "react-i18next";
import { InstagramIcon } from "../icons/InstagramIcon";
import { TikTokIcon } from "../icons/TikTokIcon";
import { FadeIn } from "../utils/FadeIn";


export function SocialSplitBlock() {
    const { t } = useTranslation("home");

    return (
        <section className="relative w-full bg-gray-50 py-32 md:py-40 overflow-hidden z-30 -mt-1 md:-mt-2">
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 rotate-180 z-10 pointer-events-none">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-12 md:h-24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,192.39,101.4,236.4,88.75,279.4,72.23,321.39,56.44Z"
                        fill="var(--color-primary-500)"
                    />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    <FadeIn direction="left" className="group relative flex flex-col items-center text-center p-10 md:p-16 bg-white border-4 border-dashed border-primary-200 rounded-[40px] transition-all duration-500 hover:border-primary-400 hover:shadow-xl">

                        <div className="absolute top-10 left-10 w-12 h-12 bg-accent-200 rounded-full mix-blend-multiply blur-xl opacity-70 group-hover:scale-150 transition-transform duration-700" />
                        <div className="absolute bottom-10 right-10 w-16 h-16 bg-secondary-200 rounded-full mix-blend-multiply blur-xl opacity-70 group-hover:scale-150 transition-transform duration-700" />

                        <div className="relative z-10 flex flex-col items-center h-full justify-center">
                            <Heading level={2} className="text-4xl md:text-5xl font-display text-gray-900 mb-4">
                                {t("SocialSplitBlock.social.title")}
                            </Heading>

                            <Text className="text-lg text-gray-600 mb-10 max-w-sm">
                                {t("SocialSplitBlock.social.subtitle")}
                            </Text>

                            <div className="flex gap-6">
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center w-16 h-16 bg-gray-50 text-gray-900 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-md transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:bg-primary-100 hover:text-primary-600"
                                >
                                    <InstagramIcon className="w-7 h-7" />
                                </a>
                                <a
                                    href="https://tiktok.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center w-16 h-16 bg-gray-50 text-gray-900 rounded-[60%_40%_30%_70%/50%_60%_40%_50%] shadow-md transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-secondary-100 hover:text-secondary-600"
                                >
                                    <TikTokIcon className="w-7 h-7" />
                                </a>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={150} direction="right" className="relative flex flex-col p-10 md:p-16 bg-secondary-500 rounded-[40px] shadow-xl overflow-hidden text-white">

                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary-400 rounded-full blur-2xl opacity-50" />
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-600 rounded-full blur-2xl opacity-50" />

                        <div className="relative z-10 flex flex-col h-full justify-center lg:items-start text-center lg:text-left">
                            <Heading level={2} className="text-4xl md:text-5xl font-display mb-4 text-white drop-shadow-sm">
                                {t("SocialSplitBlock.join.title")}
                            </Heading>

                            <Text className="text-lg text-white/90 mb-10 max-w-md mx-auto lg:mx-0">
                                {t("SocialSplitBlock.join.subtitle")}
                            </Text>

                            <Link to="/contact" className="outline-none group inline-block">
                                <Button className="gap-3 px-8 py-6 rounded-full bg-white text-secondary-600 shadow-lg transition-all duration-300 hover:bg-gray-50 hover:scale-105 active:scale-95 text-lg font-bold">
                                    {t("SocialSplitBlock.join.button")}
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}