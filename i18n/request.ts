import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    let locale;

    locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    // A significant number of Ukrainian-speaking users may have Russian as their
    // primary language. Since Russian isn't supported, next-intl would normally
    // fall back to English, which isn't ideal. We'll default to Ukrainian instead.
    locale = locale == "ru" ? "uk" : locale;

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
