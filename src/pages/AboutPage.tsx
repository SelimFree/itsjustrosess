import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { AboutStoryBlock } from "../components/blocks/AboutStoryBlock";
import { LeadersBlock } from "../components/blocks/LeadersBlock";
import { ContactCTABlock } from "../components/blocks/ContactCtaBlock";

export default function AboutPage() {

  const { t: tCommon } = useTranslation("common");
  useDocumentTitle(tCommon("navbar.about"));

  return (
    <div className="flex flex-col">
        <AboutStoryBlock />
        <LeadersBlock />
        <ContactCTABlock />
    </div>
  );
}