"use client";

import { useTranslationContext } from "@/i18n/client";

import Button from "@/ui/button";
import Heart from "@/icons/heart";

type SolidProps = {
    width?: number | string;
    height?: number | string;

    heartWidth?: string | number;
    heartHeight?: string | number;

    fontSize?: number;
};

function Solid({
    width,
    height,
    heartWidth,
    heartHeight = "100%",
    fontSize,
}: SolidProps) {
    const translationContext = useTranslationContext();
    const translations =
        translationContext.translations["components"]["donation-button"];

    return (
        <Button
            width={width}
            height={height}
            backgroundColor="red"
            radius={4}
            onClick={() => window.open("https://paypal.me/dachtrier", "_blank")}
        >
            <div className="w-full h-full flex gap-2 py-2 pl-2 pr-3 items-center">
                <Heart
                    variant="solid"
                    width={heartWidth}
                    height={heartHeight}
                    fill="white"
                />

                <span
                    className="font-bold text-white"
                    style={{ fontSize: fontSize }}
                >
                    {translations["donate"]}
                </span>
            </div>
        </Button>
    );
}

type Props = { variant: "solid" } & SolidProps;

export default function DonationButton({ variant, ...props }: Props) {
    switch (variant) {
        case "solid":
            return <Solid {...props} />;
    }
}
