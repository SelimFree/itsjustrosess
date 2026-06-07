import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { FutureEventsBlock } from "../components/blocks/FutureEventsBlock";
import { PastEventsBlock } from "../components/blocks/PastEventsBlock";
import { PartnersBlock } from "../components/blocks/PartnersBlock";

export default function EventsPage() {

    const { t: tCommon } = useTranslation("common");
    useDocumentTitle(tCommon("navbar.events"));

    return (
        <div className="flex flex-col">
            <FutureEventsBlock />
            <PastEventsBlock />
            <PartnersBlock />
        </div>
    );
}