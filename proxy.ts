import { NextRequest, NextResponse } from "next/server";
import { resolveLocale } from "@/i18n/resolver";

export default async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const maintenance = process.env["MAINTENANCE"] === "true";

    // Block direct access to the maintenance page when maintenance mode is off.
    if (!maintenance && pathname.startsWith("/maintenance")) {
        request.nextUrl.pathname = "/";
        return NextResponse.redirect(request.nextUrl);
    }

    if (maintenance && pathname != "/maintenance") {
        request.nextUrl.pathname = "/maintenance";
        return NextResponse.redirect(request.nextUrl);
    }

    return NextResponse.next({
        headers: { "x-application-locale": resolveLocale(request.headers) },
    });
}

export const config = {
    //  Match all pathnames except for
    // - if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - the ones containing a dot (e.g. `favicon.ico`)
    matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
