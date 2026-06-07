import { useState, useEffect, useCallback } from "react";
import { Calendar, MapPin, ArrowRight, Info, X } from "lucide-react";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Button } from "../ui/Button";
import { Image } from "../ui/Image";
import { useTranslation } from "react-i18next";
import { FadeIn } from "../utils/FadeIn";
import { cn } from "../../lib/utils";

export function FutureEventsBlock() {
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

  const upcomingEvents = [
    {
      id: "evt-1",
      title: t("events.upcoming.1.title", "Spring Campus Cleanup"),
      date: "MAR 24",
      time: "09:00 AM - 02:00 PM",
      location: "Main Quad & Library Gardens",
      image: "https://images.unsplash.com/photo-1618477461853-cf6ed80fbea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shortDesc: "Grab a shovel and join us for our biggest planting drive of the semester. Breakfast provided!",
      fullDesc: [
        "We're partnering with the university groundskeeping team to plant over 200 native shrubs around the library. This is our biggest initiative of the semester, and we need all hands on deck to make it happen.",
        "Gloves, tools, and a bagel breakfast will be provided for all volunteers. Please wear closed-toe shoes, thick socks, and clothes you don't mind getting dirty. Sunscreen and hats are highly recommended!",
        "We will meet at the main fountain at 8:45 AM for a quick safety briefing before splitting into four specialized teams. If you arrive late, please check in at the registration tent near the library entrance to be assigned a zone."
      ],
      formLink: "/register/spring-cleanup",
      blobColor: "bg-primary-100",
      textColor: "text-primary-600"
    },
    {
      id: "evt-2",
      title: t("events.upcoming.2.title", "Urban Farming Workshop"),
      date: "APR 02",
      time: "04:00 PM - 06:00 PM",
      location: "Student Union, Room 302",
      image: "https://images.unsplash.com/photo-1530836369250-ef71a359c717?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shortDesc: "Learn how to grow your own herbs and vegetables right in your dorm room or apartment.",
      fullDesc: [
        "No balcony? No problem! Guest speaker Dr. Aris Thorne from the Agriculture department will teach the basics of hydroponics and windowsill gardening.",
        "We will cover soil composition, lighting requirements for indoor plants, and how to troubleshoot common indoor pests without harsh chemicals.",
        "Every attendee will leave with a starter kit including basil and mint seeds, a small terracotta pot, and specialized indoor potting soil. Space is strictly limited to 40 students due to room capacity, so please register early!"
      ],
      formLink: "/register/urban-farming",
      blobColor: "bg-secondary-100",
      textColor: "text-secondary-600"
    },
    {
      id: "evt-3",
      title: t("events.upcoming.3.title", "Earth Day Festival"),
      date: "APR 22",
      time: "11:00 AM - 05:00 PM",
      location: "University Amphitheater",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      shortDesc: "Live music, vegan food trucks, and eco-friendly vendor booths. Our biggest party of the year.",
      fullDesc: [
        "Celebrate Earth Day with the whole campus! We are hosting a massive festival featuring local indie bands, sustainable thrift pop-ups, and three of the city's best vegan food trucks.",
        "The festival runs all day, so you can drop by between classes. We will also be hosting mini-workshops on the hour, every hour, covering topics from composting to fast-fashion alternatives.",
        "Stop by our main booth to learn about upcoming summer initiatives, sign up for the executive board, or pick up some exclusive 100% recycled cotton merch. Entry to the festival is completely free!"
      ],
      formLink: "/register/earth-day",
      blobColor: "bg-accent-100",
      textColor: "text-accent-600"
    }
  ];

  const activeEvent = upcomingEvents.find(e => e.id === openDetailsId);

  return (
    <>
      <section className="relative w-full bg-white py-40 md:py-48 overflow-hidden">
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          
          <FadeIn className="mb-16 md:mb-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 mb-6 text-primary-600 font-bold text-sm tracking-widest uppercase border border-primary-100">
                <Calendar className="h-4 w-4" />
                {t("events.upcoming.tagline", "Get Involved")}
              </div>
              <Heading level={2} className="text-4xl md:text-5xl font-display tracking-wide text-gray-900 mb-4">
                {t("events.upcoming.headline", "Upcoming Events")}
              </Heading>
              <Text className="text-lg text-gray-600">
                {t("events.upcoming.subheadline", "Mark your calendars. Here is what we have growing on campus this semester.")}
              </Text>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => {
              return (
                <FadeIn 
                  key={event.id} 
                  delay={index * 150}
                  direction="up" 
                  className="h-full flex"
                >
                  <div className="relative w-full flex flex-col rounded-[40px] bg-white border border-gray-100 shadow-xl overflow-hidden group">
                    
                    <div className="relative h-64 overflow-hidden bg-gray-100 shrink-0">
                      <Image 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                      />
                      
                      <div className={cn(
                        "absolute top-4 right-4 flex flex-col items-center justify-center w-16 h-16 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-lg backdrop-blur-md bg-white/90 font-display transition-transform group-hover:rotate-12 group-hover:scale-110",
                        event.textColor
                      )}>
                        <span className="text-xs font-bold uppercase tracking-wider opacity-70 -mb-1">{event.date.split(" ")[0]}</span>
                        <span className="text-2xl font-bold">{event.date.split(" ")[1]}</span>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 p-8">
                      <Heading level={3} className="text-2xl font-display text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {event.title}
                      </Heading>
                      
                      <div className="flex flex-col gap-2 mb-6">
                        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                          <Calendar className="w-4 h-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>

                      <Text className="text-gray-600 mb-8 flex-1">
                        {event.shortDesc}
                      </Text>

                      <div className="flex gap-3 mt-auto pt-4 border-t border-gray-50">
                        <Button 
                          onClick={() => window.location.href = event.formLink}
                          className="flex-1 rounded-full bg-gray-900 text-white hover:bg-primary-500 shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300"
                        >
                          Register <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        
                        <Button 
                          variant="outline"
                          onClick={() => setOpenDetailsId(event.id)}
                          className="rounded-full px-5 border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
                          aria-label="View event details"
                        >
                          <Info className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>

                  </div>
                </FadeIn>
              );
            })}
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
              "relative w-full max-w-3xl bg-white rounded-[40px] shadow-2xl h-[90vh] max-h-200 flex flex-col overflow-hidden transition-all duration-300",
              isMounted && !isClosing ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-8"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 sm:h-64 shrink-0">
              <Image 
                src={activeEvent.image} 
                alt={activeEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
              
              <button 
                onClick={handleCloseModal}
                className="absolute top-6 right-6 p-3 bg-white/20 hover:bg-white/40 hover:scale-110 active:scale-95 backdrop-blur-md text-white rounded-full transition-all duration-300 z-10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <div className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm",
                  activeEvent.blobColor,
                  activeEvent.textColor
                )}>
                  {activeEvent.date}
                </div>
                <Heading level={2} className="text-3xl sm:text-4xl font-display text-white drop-shadow-md">
                  {activeEvent.title}
                </Heading>
              </div>
            </div>

            <div 
              className="flex-1 overflow-y-auto px-6 sm:px-10 py-10 custom-scrollbar"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent, black 2rem, black calc(100% - 2rem), transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 2rem, black calc(100% - 2rem), transparent)'
              }}
            >
              <div className="flex flex-col sm:flex-row gap-6 mb-10 pb-8 border-b border-gray-100">
                <div className="flex items-center gap-3 text-gray-600 font-medium">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  {activeEvent.time}
                </div>
                <div className="flex items-center gap-3 text-gray-600 font-medium">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  {activeEvent.location}
                </div>
              </div>

              <div className="prose prose-lg prose-gray max-w-none pb-8">
                {activeEvent.fullDesc.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="shrink-0 p-6 sm:px-10 sm:py-8 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Text className="text-gray-500 font-medium text-sm text-center sm:text-left">
                Ready to make an impact? Secure your spot now.
              </Text>
              <Button 
                onClick={() => window.location.href = activeEvent.formLink}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:-translate-y-1 active:scale-95 transition-all duration-300"
              >
                Register for Event <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}