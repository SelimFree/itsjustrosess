import { useState, useEffect, useCallback } from "react";
import { ArrowRight, X, Camera, Users, Sprout } from "lucide-react";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Button } from "../ui/Button";
import { Image } from "../ui/Image";
import { useTranslation } from "react-i18next";
import { FadeIn } from "../utils/FadeIn";
import { cn } from "../../lib/utils";

export function PastEventsBlock() {
  const { t } = useTranslation();
  
  const [openDetailsId, setOpenDetailsId] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setOpenDetailsId(null);
      setIsClosing(false);
      setIsMounted(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (openDetailsId) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => setIsMounted(true), 10);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openDetailsId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && openDetailsId && !isClosing) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openDetailsId, isClosing, handleCloseModal]);

  const pastEvents = [
    {
      id: "past-1",
      title: "Winter Greenhouse Restoration",
      date: "DEC 2025",
      coverImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4ce11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shortDesc: "We spent the weekend replacing broken glass and setting up new irrigation systems in the historic campus greenhouse.",
      stats: [
        { icon: Users, value: "45", label: "Volunteers" },
        { icon: Sprout, value: "120+", label: "Plants Saved" }
      ],
      paragraphs: [
        "The historic botany greenhouse had been neglected for over a decade. When the university announced plans to tear it down, our community rallied together to prove it could still be a vital educational space.",
        "Over two freezing days in December, 45 students worked in shifts. We replaced 30 cracked panes of glass, scrubbed years of algae off the frames, and installed a brand new smart-drip irrigation system donated by the engineering department.",
        "Today, the greenhouse is fully operational and is being used by three different biology classes for their spring research projects!"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1595834928043-4cb291079dce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1530836369250-ef71a359c717?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      blobColor: "bg-primary-100",
      textColor: "text-primary-600"
    },
    {
      id: "past-2",
      title: "City Park Tree Planting",
      date: "OCT 2025",
      coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shortDesc: "Partnering with the city council to plant native saplings along the newly constructed riverwalk.",
      stats: [
        { icon: Users, value: "80", label: "Volunteers" },
        { icon: Sprout, value: "200", label: "Saplings Planted" }
      ],
      paragraphs: [
        "When the city opened the new riverwalk, we noticed a severe lack of shade. We pitched a proposal to the city council to let us handle the landscaping using exclusively native, drought-resistant tree species.",
        "The turnout was unbelievable. Over 80 students showed up at 7:00 AM on a Saturday. We split into teams of three: diggers, planters, and waterers.",
        "By noon, we had successfully planted 200 Oak and Birch saplings. In a few years, this entire walkway will be a beautiful, shaded canopy for the community to enjoy."
      ],
      gallery: [
        "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      blobColor: "bg-secondary-100",
      textColor: "text-secondary-600"
    },
    {
      id: "past-3",
      title: "Autumn Composting Drive",
      date: "SEP 2025",
      coverImage: "https://images.unsplash.com/photo-1584483788770-070868f04746?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shortDesc: "Collecting dorm food waste and turning it into nutrient-rich soil for the community gardens.",
      stats: [
        { icon: Users, value: "30", label: "Volunteers" },
        { icon: Sprout, value: "500 lbs", label: "Waste Diverted" }
      ],
      paragraphs: [
        "Food waste is one of the biggest issues in university dorms. We set up collection bins in three major freshman dorms and challenged them to save their organic waste for two weeks.",
        "The results were staggering. We collected over 500 pounds of fruit peels, coffee grounds, and vegetable scraps. We spent the weekend mixing it into our campus compost tumblers.",
        "That compost has since matured and was used to fertilize the spring vegetable gardens, creating a perfect closed-loop system right here on campus."
      ],
      gallery: [
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      blobColor: "bg-accent-100",
      textColor: "text-accent-600"
    }
  ];

  const activeEvent = pastEvents.find(e => e.id === openDetailsId);

  return (
    <>
      <section className="relative w-full bg-gray-50 py-24 md:py-32 overflow-hidden z-10 -mt-1">
        
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 rotate-180 pointer-events-none z-10">
          <svg 
            className="relative block w-[calc(100%+1.3px)] h-12 md:h-24" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,192.39,101.4,236.4,88.75,279.4,72.23,321.39,56.44Z" 
              fill="#ffffff" 
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-10">
          
          <FadeIn className="mb-16 md:mb-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-50 mb-6 text-secondary-600 font-bold text-sm tracking-widest uppercase border border-secondary-100">
                <Camera className="h-4 w-4" />
                {t("events.past.tagline", "Our Impact")}
              </div>
              <Heading level={2} className="text-4xl md:text-5xl font-display tracking-wide text-gray-900 mb-4">
                {t("events.past.headline", "Look what we grew.")}
              </Heading>
              <Text className="text-lg text-gray-600">
                {t("events.past.subheadline", "Read through some of our favorite memories, community projects, and massive weekend digs from past semesters.")}
              </Text>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <FadeIn 
                key={event.id} 
                delay={index * 150}
                direction="up" 
                className="h-full flex"
              >
                <div className="relative w-full flex flex-col rounded-[40px] bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group p-2">
                  
                  <div className="relative h-64 md:h-72 overflow-hidden rounded-[32px] bg-gray-100 shrink-0">
                    <Image 
                      src={event.coverImage} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gray-900/10 transition-opacity duration-500 group-hover:opacity-0" />
                    
                    <div className={cn(
                      "absolute top-4 left-4 px-4 py-2 rounded-full backdrop-blur-md bg-white/90 text-sm font-bold uppercase tracking-wider shadow-sm transition-transform group-hover:scale-105",
                      event.textColor
                    )}>
                      {event.date}
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6 md:p-8">
                    <Heading level={3} className="text-2xl font-display text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {event.title}
                    </Heading>

                    <Text className="text-gray-600 mb-8 line-clamp-2 flex-1">
                      {event.shortDesc}
                    </Text>

                    <Button 
                      variant="outline"
                      onClick={() => setOpenDetailsId(event.id)}
                      className="w-full rounded-full border-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md py-6"
                    >
                      Read Full Recap <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {openDetailsId && activeEvent && (
        <div 
          className={cn(
            "fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300",
            isMounted && !isClosing ? "opacity-100" : "opacity-0"
          )}
          onClick={handleCloseModal}
        >
          <div 
            className={cn(
              "relative w-full max-w-4xl bg-white rounded-[40px] shadow-2xl h-[90vh] max-h-212.5 flex flex-col overflow-hidden transition-all duration-300",
              isMounted && !isClosing ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-8"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-80 shrink-0">
              <Image 
                src={activeEvent.coverImage} 
                alt={activeEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
              
              <button 
                onClick={handleCloseModal}
                className="absolute top-6 right-6 p-3 bg-white/20 hover:bg-white/40 hover:scale-110 active:scale-95 backdrop-blur-md text-white rounded-full transition-all duration-300 z-10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute bottom-8 left-8 right-8">
                <div className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm",
                  activeEvent.blobColor,
                  activeEvent.textColor
                )}>
                  {activeEvent.date}
                </div>
                <Heading level={2} className="text-3xl sm:text-5xl font-display text-white drop-shadow-md leading-tight">
                  {activeEvent.title}
                </Heading>
              </div>
            </div>

            <div 
              className="flex-1 overflow-y-auto px-6 sm:px-12 py-10 custom-scrollbar"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent, black 2rem, black calc(100% - 2rem), transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 2rem, black calc(100% - 2rem), transparent)'
              }}
            >
              
              <div className="flex flex-wrap gap-4 sm:gap-8 mb-12 pb-10 border-b border-gray-100">
                {activeEvent.stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="flex items-center gap-4 bg-gray-50 pr-6 pl-4 py-3 rounded-2xl border border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-500 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-display text-gray-900 leading-none">{stat.value}</span>
                        <span className="text-sm font-medium text-gray-500">{stat.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="prose prose-lg prose-gray max-w-none pb-12">
                {activeEvent.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              <Heading level={4} className="text-2xl font-display text-gray-900 mb-6 flex items-center gap-2">
                <Camera className="w-6 h-6 text-primary-500" /> Event Gallery
              </Heading>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-10">
                {activeEvent.gallery.map((imgUrl, idx) => (
                  <div key={idx} className="relative aspect-4/3 rounded-3xl overflow-hidden bg-gray-100 group">
                    <Image 
                      src={imgUrl} 
                      alt={`Gallery image ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}