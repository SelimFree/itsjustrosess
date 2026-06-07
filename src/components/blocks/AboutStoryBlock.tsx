import { Sparkles } from "lucide-react";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Image } from "../ui/Image";
import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";
import { FadeIn } from "../utils/FadeIn";

export function AboutStoryBlock() {
    const { t } = useTranslation();

    const storyChapters = [
        {
            id: "seed",
            titleKey: "about.story.seed.title",
            defaultTitle: "The seed of an idea.",
            contentKey: "about.story.seed.content",
            defaultContent: "It started with three friends, two shovels, and a neglected patch of dirt behind the library. We realized that our campus had so much potential for green spaces, but no centralized way for students to get their hands dirty and help out.",
            image: "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            blobColor: "bg-primary-200",
        },
        {
            id: "roots",
            titleKey: "about.story.roots.title",
            defaultTitle: "Taking root.",
            contentKey: "about.story.roots.content",
            defaultContent: "What began as a weekend hobby quickly grew. By the end of our first semester, over fifty students had joined our mailing list. We weren't just planting flowers anymore; we were building a community of people who cared about sustainable living.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            blobColor: "bg-secondary-200",
        },
        {
            id: "bloom",
            titleKey: "about.story.bloom.title",
            defaultTitle: "Blooming together.",
            contentKey: "about.story.bloom.content",
            defaultContent: "Today, we are an officially recognized student organization partnering with local city councils. From eco-education workshops to massive weekend planting drives, we are proving that small actions create massive ripples.",
            image: "https://images.unsplash.com/photo-1535734668010-da0c7d3085f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            blobColor: "bg-accent-200",
        }
    ];

    return (
        <section className="relative w-full bg-white py-40 md:py-48 overflow-hidden">

            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

                <div className="absolute -top-40 -left-40 w-120 h-120 bg-accent-300/30 blur-3xl rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-spin [animation-duration:25s]" />

                <div className="absolute top-[30%] -right-40 w-140 h-140 bg-primary-300/20 blur-3xl rounded-[60%_40%_30%_70%/50%_60%_40%_50%] animate-spin [animation-duration:30s] [animation-direction:reverse]" />

                <div className="absolute -bottom-40 -left-20 w-120 h-120 bg-secondary-300/20 blur-3xl rounded-[50%_50%_70%_30%/40%_40%_60%_60%] animate-spin [animation-duration:35s]" />

                <svg
                    className="absolute left-1/2 top-0 w-150 h-full -translate-x-1/2 text-gray-200 opacity-60"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 1000"
                    fill="none"
                >
                    <path
                        d="M 50 0 C 80 150, 20 250, 50 400 C 80 550, 20 700, 50 850 C 80 950, 50 1000, 50 1000"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>
            </div>


            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                <FadeIn className="text-center max-w-3xl mx-auto mb-24 md:mb-32">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 mb-6 text-gray-600 font-bold text-sm tracking-widest uppercase border border-gray-100 shadow-sm backdrop-blur-sm">
                        <Sparkles className="h-4 w-4 text-primary-500" />
                        {t("about.tagline", "Our Story")}
                    </div>
                    <Heading level={2} className="text-5xl md:text-6xl font-display tracking-tight text-gray-900 leading-[1.1] mb-6">
                        {t("about.headline", "How we grew from the ground up.")}
                    </Heading>
                    <Text className="text-xl text-gray-600 leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-2 inline-block">
                        {t("about.subheadline", "Every great initiative starts with a simple desire to leave things a little better than you found them.")}
                    </Text>
                </FadeIn>

                <div className="flex flex-col gap-24 md:gap-40">
                    {storyChapters.map((chapter, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={chapter.id}
                                className={cn(
                                    "flex flex-col lg:items-center gap-12 lg:gap-20",
                                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                )}
                            >
                                <div className="w-full lg:w-1/2 relative group">
                                    <FadeIn
                                        delay={200}
                                        className={cn(
                                            "absolute -inset-6 md:-inset-10 opacity-50 blur-3xl rounded-full mix-blend-multiply transition-transform duration-1000 group-hover:scale-110",
                                            chapter.blobColor
                                        )}
                                    />

                                    <FadeIn direction={isEven ? "right" : "left"} className="relative z-10">
                                        <div className="overflow-hidden rounded-[40px] shadow-2xl bg-gray-100 aspect-4/3 ring-1 ring-black/5">
                                            <Image
                                                src={chapter.image}
                                                alt={t(chapter.titleKey, chapter.defaultTitle)}
                                                className="w-full h-full object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                            />
                                        </div>
                                    </FadeIn>
                                </div>

                                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                    <FadeIn direction="up" delay={100}>
                                        <Heading level={3} className="text-3xl md:text-4xl font-display text-gray-900 mb-6 bg-white/60 backdrop-blur-md rounded-xl p-2 -ml-2 inline-block">
                                            {t(chapter.titleKey, chapter.defaultTitle)}
                                        </Heading>
                                    </FadeIn>

                                    <FadeIn direction="up" delay={200}>
                                        <Text className="text-lg md:text-xl text-gray-600 leading-relaxed bg-white/60 backdrop-blur-md rounded-2xl p-4 -ml-4 shadow-sm border border-white/40">
                                            {t(chapter.contentKey, chapter.defaultContent)}
                                        </Text>
                                    </FadeIn>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}