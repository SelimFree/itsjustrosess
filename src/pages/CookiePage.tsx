import { Circle } from "lucide-react";
import { useTranslation } from "react-i18next";
import LegalPage from "./LegalPage";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { List, ListItem } from "../components/ui/List";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

interface CookieDataItem {
  label: string;
  desc: string;
}

export default function CookiePage() {
  const { t } = useTranslation("legal");

  const { t: tCommon } = useTranslation("common");
  useDocumentTitle(tCommon("navbar.cookie"));

  const Bullet = <Circle className="h-3 w-3 fill-secondary-400 text-secondary-400 mt-1.5 shadow-sm" />;

  const cookieList = t("cookiePolicy.section2.list", { returnObjects: true }) as CookieDataItem[];

  const content = (
    <div className="space-y-12">
      <section>
        <Heading level={3} className="mb-4 text-primary-600 font-display text-2xl md:text-3xl tracking-wide">
          {t("cookiePolicy.section1.title")}
        </Heading>
        <Text className="text-gray-600 leading-relaxed text-lg">
          {t("cookiePolicy.section1.text")}
        </Text>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-primary-600 font-display text-2xl md:text-3xl tracking-wide">
          {t("cookiePolicy.section2.title")}
        </Heading>
        <Text className="mb-6 text-gray-600 leading-relaxed text-lg">
          {t("cookiePolicy.section2.text")}
        </Text>

        <List className="space-y-4 bg-gray-50/50 p-6 rounded-3xl border border-gray-100">
          {Array.isArray(cookieList) && cookieList.map((item, index) => (
            <ListItem key={index} icon={Bullet} className="items-start">
              <span className="text-gray-600 leading-relaxed">
                <span className="font-display font-bold text-secondary-600 text-lg mr-2">
                  {item.label}
                </span>
                {item.desc}
              </span>
            </ListItem>
          ))}
        </List>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-primary-600 font-display text-2xl md:text-3xl tracking-wide">
          {t("cookiePolicy.section3.title")}
        </Heading>
        <Text className="text-gray-600 leading-relaxed text-lg">
          {t("cookiePolicy.section3.textBefore")}{" "}
          <a
            href="https://allaboutcookies.org"
            className="text-secondary-500 font-bold hover:text-secondary-600 hover:underline decoration-2 underline-offset-4 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("cookiePolicy.section3.linkText")}
          </a>
          .
        </Text>
      </section>
    </div>
  );

  return (
    <LegalPage
      title={t("cookiePolicy.title")}
      lastUpdated={t("cookiePolicy.lastUpdated")}
      content={content}
    />
  );
}