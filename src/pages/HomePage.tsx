import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { HeroBlock } from "../components/blocks/HeroBlock";
import { ImpactPillarsBlock } from "../components/blocks/ImpactPilarsBlock";
import { ImpactCounter } from "../components/blocks/ImpactCounterBlock";
import { SocialSplitBlock } from "../components/blocks/SocialSplitBlock";

export default function HomePage() {

  const { t: tCommon } = useTranslation("common");
  useDocumentTitle(tCommon("navbar.home"));

  return (
    <div className="flex flex-col">
      <HeroBlock />
      <ImpactPillarsBlock />
      <ImpactCounter />
      <SocialSplitBlock />
    </div>
  );
}