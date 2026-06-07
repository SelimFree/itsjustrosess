import { useState, useRef } from "react";
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';
import { ShieldCheck, Loader2, AlertCircle, X, Mail, Sprout, HeartHandshake, Send } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { FadeIn } from "../utils/FadeIn";

const INQUIRY_OPTIONS = [
    {
        value: "event_participation",
        labelKey: "contactBlock.form.departmentOptions.event_participation"
    },
    {
        value: "volunteer",
        labelKey: "contactBlock.form.departmentOptions.volunteer"
    },
    {
        value: "partnership",
        labelKey: "contactBlock.form.departmentOptions.partnership"
    },
    {
        value: "media",
        labelKey: "contactBlock.form.departmentOptions.media"
    },
    {
        value: "other",
        labelKey: "contactBlock.form.departmentOptions.other"
    }
];

const EVENT_OPTIONS = [
    {
        value: "event 1",
        labelKey: "contactBlock.form.departmentOptions.event_participation"
    },
    {
        value: "event 2",
        labelKey: "contactBlock.form.departmentOptions.volunteer"
    },
    {
        value: "event 3",
        labelKey: "contactBlock.form.departmentOptions.partnership"
    },
]

export const ContactFormBlock = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [eventSelected, setEventSelected] = useState(false);
    const { t, i18n } = useTranslation("contact");

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        if (!formRef.current) return;

        setIsSubmitting(true);

        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());

        const payload = {
            ...data,
            user_lang: (i18n.language || "en").split('-')[0]
        };

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.error || "Failed to send message");
            }

            setIsSubmitted(true);
            formRef.current.reset();
        } catch (err) {
            console.error(err);
            setError("contactBlock.errorMessage");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative w-full py-40 md:py-48 bg-gray-50 overflow-hidden">

            <div className="absolute top-0 right-0 w-160 h-160 bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24">

                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 mb-6 text-primary-600 font-bold text-sm tracking-widest uppercase border border-primary-100 shadow-sm">
                            <HeartHandshake className="h-4 w-4" />
                            {t("contactBlock.subtitle", "Let's Connect")}
                        </div>

                        <Heading level={2} className="text-4xl md:text-5xl font-display text-gray-900 tracking-tight mb-6">
                            {t("contactBlock.title", "We'd love to hear from you.")}
                        </Heading>

                        <Text className="text-gray-600 text-lg leading-relaxed mb-10">
                            {t("contactBlock.description", "Whether you want to volunteer, partner on a campus initiative, or just say hello, drop us a line below and our team will get back to you soon.")}
                        </Text>

                        <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm mb-10">
                            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                                <ShieldCheck className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <Text className="font-display font-semibold text-gray-900 text-lg mb-1">
                                    {t("contactBlock.securityTitle", "Your data is safe")}
                                </Text>
                                <Text className="text-sm text-gray-500 leading-relaxed">
                                    {t("contactBlock.securityDescription", "We only use your information to respond to your inquiry. We never share your data with third parties.")}
                                </Text>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-200">
                            <Text className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
                                {t("contactBlock.directContactTitle", "Or reach us directly")}
                            </Text>
                            <a
                                href={`mailto:${t("contactBlock.emailAddress", "hello@itsjustroses.org")}`}
                                className="group flex items-center gap-4 text-gray-900 hover:text-primary-600 transition-colors"
                            >
                                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-white shadow-sm border border-gray-100 group-hover:scale-110 group-hover:border-primary-200 group-hover:shadow-md transition-all duration-300">
                                    <Mail className="h-6 w-6 text-gray-400 group-hover:text-primary-500 transition-colors" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-display font-semibold">
                                        {t("contactBlock.emailAddress", "hello@itsjustroses.org")}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        {t("contactBlock.directContactLabel", "We usually reply within 24 hours")}
                                    </span>
                                </div>
                            </a>
                        </div>
                    </FadeIn>
                </div>

                <div className="w-full lg:w-7/12">
                    <FadeIn delay={200} direction="up" className="h-full">
                        <div className="relative bg-white rounded-[40px] shadow-2xl border border-gray-100 p-8 sm:p-10 lg:p-12 overflow-hidden h-full">

                            {!isSubmitted ? (
                                <form ref={formRef} className="space-y-6 relative z-10" onSubmit={handleSubmit}>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
                                                {t("contactBlock.form.firstNameLabel", "First Name")}
                                            </Label>
                                            <Input id="firstName" name="firstName" placeholder={t("contactBlock.form.firstNamePlaceholder", "Jane")} required className="rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all px-4 py-3" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                                                {t("contactBlock.form.lastNameLabel", "Last Name")}
                                            </Label>
                                            <Input id="lastName" name="lastName" placeholder={t("contactBlock.form.lastNamePlaceholder", "Doe")} required className="rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all px-4 py-3" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="company" className="text-sm font-semibold text-gray-700">
                                                {t("contactBlock.form.companyLabel", "Organization / University")}
                                            </Label>
                                            <Input id="company" name="company" placeholder={t("contactBlock.form.companyPlaceholder", "e.g. State University")} className="rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all px-4 py-3" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                                                {t("contactBlock.form.emailLabel", "Email Address")}
                                            </Label>
                                            <Input id="email" name="email" type="email" placeholder={t("contactBlock.form.emailPlaceholder", "jane@example.com")} required className="rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all px-4 py-3" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="department" className="text-sm font-semibold text-gray-700">
                                            {t("contactBlock.form.departmentLabel", "What is this regarding?")}
                                        </Label>
                                        <div className="relative">
                                            <select
                                                id="department"
                                                name="department"
                                                className="w-full rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all px-4 py-3 text-gray-700 appearance-none cursor-pointer"
                                                required
                                                defaultValue=""
                                                onChange={(e) => setEventSelected(e.target.value === "event_participation")}                                            >
                                                <option value="" disabled>{t("contactBlock.form.departmentOptions.default", "Select an option...")}</option>
                                                {INQUIRY_OPTIONS.map((o) => (
                                                    <option value={o.value}>{t(o.labelKey, o.value)}</option>
                                                ))}
                                            </select>
                                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {eventSelected &&
                                        <div className="space-y-2">
                                            <Label htmlFor="event" className="text-sm font-semibold text-gray-700">
                                                {t("contactBlock.form.eventLabel", "What event you want to participate?")}
                                            </Label>
                                            <div className="relative">
                                                <select
                                                    id="event"
                                                    name="event"
                                                    className="w-full rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all px-4 py-3 text-gray-700 appearance-none cursor-pointer"
                                                    required
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>{t("contactBlock.form.eventOptions.default", "Select an event...")}</option>
                                                    {EVENT_OPTIONS.map((e) => (
                                                        <option value={e.value}>{t(e.labelKey, e.value)}</option>
                                                    ))}
                                                </select>
                                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                                            {t("contactBlock.form.messageLabel", "Your Message")}
                                        </Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder={t("contactBlock.form.messagePlaceholder", "How can we help you today?")}
                                            rows={5}
                                            required
                                            className="rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all px-4 py-3 resize-none custom-scrollbar"
                                        />
                                    </div>

                                    {error && (
                                        <div className="relative flex items-start gap-3 p-4 rounded-2xl bg-red-50 border border-red-100 animate-in slide-in-from-top-2">
                                            <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                            <div className="flex-1 pr-6">
                                                <Text className="text-sm font-semibold text-red-900 mb-0.5">
                                                    {t("contactBlock.errorTitle", "Something went wrong")}
                                                </Text>
                                                <Text className="text-sm text-red-700">
                                                    {t(error)}
                                                </Text>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setError(null)}
                                                className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                    )}

                                    <div className="pt-4">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary-500 hover:bg-primary-600 text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                                                    {t("contactBlock.buttonSending", "Sending...")}
                                                </>
                                            ) : (
                                                <>
                                                    {t("contactBlock.buttonSubmit", "Send Message")}
                                                    <Send className="h-4 w-4 ml-2" />
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            ) : (
                                <div className="h-full min-h-112.5 flex flex-col items-center justify-center text-center p-8 animate-in zoom-in-95 duration-500 relative z-10">
                                    <div className="absolute inset-0 bg-primary-50/50 rounded-[40px] -z-10" />

                                    <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl border border-primary-100">
                                        <Sprout className="h-10 w-10 text-primary-500" strokeWidth={2} />
                                    </div>

                                    <Heading level={3} className="text-3xl font-display text-gray-900 mb-4">
                                        {t("contactBlock.successTitle", "Message Received!")}
                                    </Heading>

                                    <Text className="text-gray-600 text-lg leading-relaxed max-w-sm mx-auto mb-10">
                                        {t("contactBlock.successMessage", "Thanks for reaching out. Your message has been planted in our inbox, and we'll get back to you as soon as it sprouts.")}
                                    </Text>

                                    <Button
                                        variant="outline"
                                        onClick={() => setIsSubmitted(false)}
                                        className="rounded-full border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-white shadow-sm"
                                    >
                                        {t("contactBlock.successButton", "Send another message")}
                                    </Button>
                                </div>
                            )}
                        </div>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
};