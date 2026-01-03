"use client";

import { useTranslationContext } from "@/i18n/client";
import { HeartIcon } from "@dach/svg";

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
        <button
            style={{ width, height }}
            className="bg-red-500 rounded-sm"
            onClick={() => window.open("https://paypal.me/dachtrier", "_blank")}
        >
            <div className="w-full h-full flex gap-2 py-2 pl-2 pr-3 items-center">
                <HeartIcon
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
        </button>
    );
}

type OutlineProps = {
    gap?: number;
    size?: number;
    color?: string;
};

function Outline({ gap = 8, size = 14, color = "red" }: OutlineProps) {
    const translationContext = useTranslationContext();
    const translations =
        translationContext.translations["components"]["donation-button"];

    return (
        <span
            onClick={() => window.open("https://paypal.me/dachtrier", "_blank")}
            className="select-none"
            style={{
                display: "flex",
                alignItems: "center",
                color: color,
                fontSize: size,
                fontWeight: "bold",
                cursor: "pointer",
                gap,
            }}
        >
            <HeartIcon height={size * 1.4} fill={color} />
            {translations["donate"]}
        </span>
    );
}

type Props =
    | ({ variant: "solid" } & SolidProps)
    | ({ variant: "outline" } & OutlineProps);

export default function DonationButton(props: Props) {
    switch (props.variant) {
        case "solid":
            return <Solid {...props} />;

        case "outline":
            return <Outline {...props} />;
    }
}
