"use client";

import { MouseEvent } from "react";
import { useTranslationContext } from "@/i18n/client";
import { postLocale } from "@/i18n/cookie";
import { CheckIcon, UkrainianFlag, GermanFlag, BritishFlag } from "@dach/svg";

type IconProps = {
    locale: "en" | "uk" | "de";
    size?: number | string;
};

function Icon({ locale, size }: IconProps) {
    switch (locale) {
        case "en":
            return <BritishFlag width={size} height={size} />;

        case "de":
            return <GermanFlag width={size} height={size} />;

        case "uk":
            return <UkrainianFlag width={size} height={size} />;
    }
}

type Props = {
    locale: "en" | "de" | "uk";
    onClick?(event: MouseEvent): void;
};

const localeLegendMap = {
    en: "English",
    de: "Deutsch",
    uk: "Українська",
};

export default function LanguageMenuItem({ locale, onClick }: Props) {
    const translationContext = useTranslationContext();
    const selectedLocale = translationContext.locale;

    return (
        <button
            className="w-full p-[7.5px 16px] bg-white cursor-pointer"
            onClick={async (event) => {
                onClick?.(event);
                await postLocale(locale);
                window.location.reload();
            }}
        >
            <div className="flex! items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                    <Icon locale={locale} size={24} />
                    <span className="text-[15px]">
                        {localeLegendMap[locale]}
                    </span>
                </div>

                {selectedLocale === locale && (
                    <CheckIcon strokeWidth={1.5} height={18} />
                )}
            </div>
        </button>
    );
}
