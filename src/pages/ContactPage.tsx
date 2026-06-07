import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ContactFormBlock } from "../components/blocks/ContactFormBlock";

export default function ContactPage() {

    const { t: tCommon } = useTranslation("common");
    useDocumentTitle(tCommon("navbar.contact"));

    return (
        <div className="flex flex-col">
            <ContactFormBlock />
        </div>
    );
}