import "./global.css";

import { ReactNode } from "react";
import { getLocale } from "@/i18n/server";

type Props = {
    children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
    const locale = await getLocale();

    return (
        <html lang={locale}>
            <body>{children}</body>
        </html>
    );
}
