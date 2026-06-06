import { Circle } from "lucide-react";
import { useTranslation } from "react-i18next";
import LegalPage from "./LegalPage";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { List, ListItem } from "../components/ui/List";
import { useAppContext } from "../context/AppContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

interface PrivacyDataItem {
  label: string;
  desc: string;
}

export default function PrivacyPage() {
  const { t } = useTranslation("legal");
  const { companyName } = useAppContext();

  const { t: tCommon } = useTranslation("common");
  useDocumentTitle(tCommon("navbar.privacy"));

  const Bullet = <Circle className="h-3 w-3 fill-secondary-400 text-secondary-400 mt-1.5 shadow-sm" />;

  const dataList = t("privacyPolicy.section2.dataList", { returnObjects: true }) as PrivacyDataItem[];

  const content = (
    <div className="space-y-12">
      <section>
        <Heading level={3} className="mb-4 text-primary-600 font-display text-2xl md:text-3xl tracking-wide">
          {t("privacyPolicy.section1.title")}
        </Heading>
        <Text className="text-gray-600 leading-relaxed text-lg">
          {t("privacyPolicy.section1.text", { company: companyName })}
        </Text>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-primary-600 font-display text-2xl md:text-3xl tracking-wide">
          {t("privacyPolicy.section2.title")}
        </Heading>
        <Text className="mb-6 text-gray-600 leading-relaxed text-lg">
          {t("privacyPolicy.section2.text")}
        </Text>

        <List className="space-y-4 bg-gray-50/50 p-6 rounded-3xl border border-gray-100">
          {Array.isArray(dataList) && dataList.map((item, index) => (
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
          {t("privacyPolicy.section3.title")}
        </Heading>
        <Text className="text-gray-600 leading-relaxed text-lg">
          {t("privacyPolicy.section3.text")}
        </Text>
      </section>
    </div>
  );

  return (
    <LegalPage
      title={t("privacyPolicy.title")}
      lastUpdated={t("privacyPolicy.lastUpdated")}
      content={content}
    />
  );
}