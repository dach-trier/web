import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "de", "uk"],
    defaultLocale: "en",
    localePrefix: "never",
    localeCookie: true,
    localeDetection: true,
});
