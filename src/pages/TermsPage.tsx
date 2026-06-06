import { Circle } from "lucide-react";
import { useTranslation } from "react-i18next";
import LegalPage from "./LegalPage";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { List, ListItem } from "../components/ui/List";
import { useAppContext } from "../context/AppContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function TermsPage() {
  const { t } = useTranslation("legal");
  const { companyName, country } = useAppContext();

  const { t: tCommon } = useTranslation("common");
  useDocumentTitle(tCommon("navbar.terms"));

  const Bullet = <Circle className="h-3 w-3 fill-secondary-400 text-secondary-400 mt-1.5 shadow-sm" />;

  const licenseList = t("termsOfService.section2.list", { returnObjects: true }) as string[];

  const content = (
    <div className="space-y-12">
      <section>
        <Heading level={3} className="mb-4 text-primary-600 font-display text-2xl md:text-3xl tracking-wide">
          {t("termsOfService.section1.title")}
        </Heading>
        <Text className="text-gray-600 leading-relaxed text-lg">
          {t("termsOfService.section1.text", { company: companyName })}
        </Text>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-primary-600 font-display text-2xl md:text-3xl tracking-wide">
          {t("termsOfService.section2.title")}
        </Heading>
        <Text className="mb-6 text-gray-600 leading-relaxed text-lg">
          {t("termsOfService.section2.text")}
        </Text>

        <List className="space-y-4 bg-gray-50/50 p-6 rounded-3xl border border-gray-100">
          {Array.isArray(licenseList) && licenseList.map((item, index) => (
            <ListItem key={index} icon={Bullet} className="items-start">
              <span className="text-gray-600 leading-relaxed">
                {item}
              </span>
            </ListItem>
          ))}
        </List>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-primary-600 font-display text-2xl md:text-3xl tracking-wide">
          {t("termsOfService.section3.title")}
        </Heading>
        <Text className="text-gray-600 leading-relaxed text-lg">
          {t("termsOfService.section3.text", { country: country })}
        </Text>
      </section>
    </div>
  );

  return (
    <LegalPage
      title={t("termsOfService.title")}
      lastUpdated={t("termsOfService.lastUpdated")}
      content={content}
    />
  );
}