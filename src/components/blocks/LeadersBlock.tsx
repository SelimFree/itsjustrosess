import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Image } from "../ui/Image";
import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";
import { FadeIn } from "../utils/FadeIn";
import { InstagramIcon } from "../icons/InstagramIcon";
import { TikTokIcon } from "../icons/TikTokIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";

export function LeadersBlock() {
    const { t } = useTranslation();

    const leaders = [
        {
            id: "leader-1",
            name: "Emma Lin",
            role: t("leaders.role.founder", "Founder & President"),
            bio: t("leaders.bio.emma", "Plant mom to 40+ succulents. Usually found covered in potting soil or drinking iced matcha."),
            image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            blobColor: "bg-accent-100",
            baseShape: "rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
            hoverShape: "group-hover:rounded-[60%_40%_30%_70%/50%_60%_40%_50%]",
            socials: {
                instagram: "https://instagram.com",
                tiktok: "https://tiktok.com",
                linkedin: "https://linkedin.com",
            }
        },
        {
            id: "leader-2",
            name: "Gabor Farkas",
            role: t("leaders.role.operations", "Head of Operations"),
            bio: t("leaders.bio.gabor", "The guy who actually knows how to organize a spreadsheet and make sure the shovels show up on time."),
            image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            blobColor: "bg-primary-100",
            baseShape: "rounded-[60%_40%_30%_70%/50%_60%_40%_50%]",
            hoverShape: "group-hover:rounded-[50%_50%_70%_30%/40%_40%_60%_60%]",
            socials: {
                linkedin: "https://linkedin.com",
            }
        },
        {
            id: "leader-3",
            name: "David Okafor",
            role: t("leaders.role.community", "Community Lead"),
            bio: t("leaders.bio.david", "Always smiling, always ready to hand you a pair of gloves. He is the heartbeat of our weekend digs."),
            image: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            blobColor: "bg-secondary-100",
            baseShape: "rounded-[50%_50%_70%_30%/40%_40%_60%_60%]",
            hoverShape: "group-hover:rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
            socials: {
                instagram: "https://instagram.com",
                tiktok: "https://tiktok.com",
            }
        }
    ];

    return (
        <section className="relative w-full bg-gray-50 py-32 md:py-40 z-20">
            <div className="absolute bottom-full left-0 w-full overflow-hidden leading-0 translate-y-0.5 pointer-events-none z-10">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-12 md:h-24"
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

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-10">

                <FadeIn className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
                    <Heading level={2} className="text-4xl md:text-5xl font-display tracking-wide text-gray-900 mb-6">
                        {t("leaders.headline", "Meet the roots of our community.")}
                    </Heading>
                    <Text className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        {t("leaders.subheadline", "A slightly chaotic, heavily caffeinated group of students who just really love plants and making a difference.")}
                    </Text>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
                    {leaders.map((leader, index) => (
                        <FadeIn
                            key={leader.id}
                            delay={index * 150}
                            direction="up"
                            className="flex flex-col items-center text-center group"
                        >
                            <div className={cn(
                                "relative w-56 h-56 md:w-64 md:h-64 mb-8 overflow-hidden transition-all duration-[1.5s] ease-[cubic-bezier(0.34,1.56,0.64,1)] p-2",
                                leader.blobColor,
                                leader.baseShape,
                                leader.hoverShape,
                                "hover:scale-105 hover:shadow-xl"
                            )}>
                                <Image
                                    src={leader.image}
                                    alt={leader.name}
                                    className={cn(
                                        "w-full h-full object-cover transition-all duration-[1.5s] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                                        leader.baseShape,
                                        leader.hoverShape
                                    )}
                                />
                            </div>

                            <Heading level={3} className="text-2xl font-display text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                                {leader.name}
                            </Heading>

                            <Text className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-4">
                                {leader.role}
                            </Text>

                            <Text className="text-gray-600 leading-relaxed mb-6 max-w-sm">
                                {leader.bio}
                            </Text>

                            <div className="flex gap-4 min-h-10">
                                {leader.socials?.instagram && (
                                    <a
                                        href={leader.socials.instagram}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`${leader.name} Instagram`}
                                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 shadow-sm transition-all hover:bg-primary-100 hover:text-primary-600 hover:scale-110 hover:-rotate-12"
                                    >
                                        <InstagramIcon className="w-5 h-5" />
                                    </a>
                                )}

                                {leader.socials?.tiktok && (
                                    <a
                                        href={leader.socials.tiktok}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`${leader.name} TikTok`}
                                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 shadow-sm transition-all hover:bg-secondary-100 hover:text-secondary-600 hover:scale-110 hover:rotate-12"
                                    >
                                        <TikTokIcon className="w-5 h-5" />
                                    </a>
                                )}

                                {leader.socials?.linkedin && (
                                    <a
                                        href={leader.socials.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`${leader.name} LinkedIn`}
                                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 shadow-sm transition-all hover:bg-accent-100 hover:text-accent-600 hover:scale-110 hover:-rotate-12"
                                    >
                                        <LinkedInIcon className="w-5 h-5" />
                                    </a>
                                )}
                            </div>

                        </FadeIn>
                    ))}
                </div>

            </div>
        </section>
    );
}