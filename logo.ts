export type LogoType = "dach" | "bereginja" | "camp";

export function getLogoPath(type: LogoType) {
    return "/" + type + ".svg";
}
