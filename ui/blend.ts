import Color from "@/ui/color";
import Shade from "@/ui/shade";
import State from "@/ui/state";

import colors from "tailwindcss/colors";

type BlendProps = {
    color: Color;
    shade?: Shade;
    state?: State;
};

export default function blend({
    color,
    shade = "normal",
    state = "cold",
}: BlendProps): string {
    switch (color) {
        case "white":
            switch (state) {
                case "cold":
                    return "#ffffff";

                case "hot":
                    return "#f2f2f2";

                case "active":
                    return "#e6e6e6";
            }

        case "black":
            switch (state) {
                case "cold":
                    return "#000000";

                case "hot":
                    return "#333333";

                case "active":
                    return "#444444";
            }
    }

    let numshade: number = {
        lightest: 200,
        lighter: 300,
        light: 400,
        normal: 500,
        dark: 600,
        darker: 700,
        darkest: 800,
    }[shade];

    switch (state) {
        case "hot":
            numshade = Math.min(950, numshade + 100);
            break;

        case "active":
            numshade = Math.min(950, numshade + 200);
            break;
    }

    return colors[color][numshade]!;
}
