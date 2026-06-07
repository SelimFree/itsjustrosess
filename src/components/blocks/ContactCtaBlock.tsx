import { Link } from "react-router-dom";
import { ArrowRight, Sprout } from "lucide-react";
import { Button } from "../ui/Button";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { useTranslation } from "react-i18next";
import { FadeIn } from "../utils/FadeIn";

export function ContactCTABlock() {
    const { t } = useTranslation();

    return (
        <section className="relative w-full bg-gray-50 py-24 md:py-32 pb-32 md:pb-48 px-6 lg:px-8 z-20">
            <div className="absolute -top-40 -right-40 w-120 h-120 bg-secondary-400/50 rounded-full blur-3xl mix-blend-multiply opacity-80 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -bottom-40 -left-20 w-140 h-140 bg-primary-600/30 rounded-full blur-3xl mix-blend-multiply opacity-80 animate-[spin_25s_linear_infinite_reverse]" />
            <FadeIn direction="up" className="mx-auto max-w-6xl">

                <div className="relative w-full rounded-[40px] md:rounded-[60px] bg-primary-500 overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.01] group">


                    <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 md:py-32">

                        <div className="flex items-center justify-center w-20 h-20 mb-8 bg-white/20 backdrop-blur-md text-white rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                            <Sprout className="w-10 h-10 drop-shadow-sm" strokeWidth={2} />
                        </div>

                        <Heading
                            level={2}
                            className="text-4xl md:text-6xl lg:text-7xl font-display tracking-tight text-white mb-6 drop-shadow-md max-w-4xl"
                        >
                            {t("cta.headline", "We have the shovels. We just need you.")}
                        </Heading>

                        <Text className="text-lg md:text-2xl text-white/90 leading-relaxed mb-12 max-w-2xl font-medium drop-shadow-sm">
                            {t(
                                "cta.subheadline",
                                "Whether you have a green thumb or have never touched soil in your life, there is a place for you here. Let's grow something together."
                            )}
                        </Text>

                        <Link to="/contact" className="outline-none group/btn inline-block">
                            <Button className="gap-3 px-10 py-6 rounded-full bg-white text-primary-600 shadow-xl transition-all duration-300 hover:bg-gray-50 hover:scale-105 active:scale-95 text-lg font-bold">
                                {t("cta.button", "Get in touch")}
                                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </Button>
                        </Link>

                    </div>
                </div>

            </FadeIn>
        </section>
    );
}