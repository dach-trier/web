"use client";

import { MouseEvent } from "react";
import { useTranslationContext } from "@/i18n/client";

import Button from "@/ui/button";
import Check from "@/icons/check";
import Ukraine from "@/icons/ukraine";
import Germany from "@/icons/germany";
import GreatBritain from "@/icons/great-britain";
import { postLocale } from "@/i18n/cookie";

type IconProps = {
    locale: "en" | "uk" | "de";
    height?: number | string;
};

function Icon({ locale, height }: IconProps) {
    switch (locale) {
        case "en":
            return <GreatBritain height={height} />;

        case "de":
            return <Germany height={height} />;

        case "uk":
            return <Ukraine height={height} />;
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
        <Button
            width="100%"
            padding="7.5px 16px"
            backgroundColor="white"
            onClick={async (event) => {
                onClick?.(event);
                await postLocale(locale);
                window.location.reload();
            }}
        >
            <div className="flex! items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                    <Icon locale={locale} height={26} />
                    <span className="">{localeLegendMap[locale]}</span>
                </div>

                {selectedLocale === locale && (
                    <Check strokeWidth={1.5} height={20} />
                )}
            </div>
        </Button>
    );
}
