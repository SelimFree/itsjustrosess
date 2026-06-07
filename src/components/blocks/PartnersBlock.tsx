import { Heading } from "../ui/Heading";
import { useTranslation } from "react-i18next";
import { FadeIn } from "../utils/FadeIn";

const partners = [
  { id: "google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { id: "ibm", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { id: "microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { id: "amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { id: "cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { id: "tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" },
];

export function PartnersBlock() {
  const { t } = useTranslation("events");

  const trackHalf = [...partners, ...partners, ...partners];

  const infiniteTrack = [...trackHalf, ...trackHalf];

  return (
    <section className="relative w-full bg-white py-24 md:py-32 z-20">

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 rotate-180 pointer-events-none z-10 -translate-y-px">
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

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 pointer-events-none z-10 translate-y-px">
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-16 pt-8 text-center">
        <FadeIn>
          <Heading level={3} className="text-xl md:text-2xl font-display text-gray-400 uppercase tracking-widest">
            {t("PartnersBlock.headline")}
          </Heading>
        </FadeIn>
      </div>

      <div
        className="relative w-full max-w-[100vw] overflow-hidden flex items-center py-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <div className="flex animate-scroll-left pause-on-hover w-max relative z-20">
          {infiniteTrack.map((partner, index) => (
            <div
              key={`partner-${partner.id}-${index}`}
              className="flex items-center justify-center w-28 md:w-40 mx-8 md:mx-12 cursor-pointer h-20"
            >
              <img
                src={partner.logo}
                alt={t(`PartnersBlock.partners.${partner.id}`)}
                className="max-w-[75%] max-h-[75%] object-contain grayscale opacity-40 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:scale-[1.15] drop-shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}