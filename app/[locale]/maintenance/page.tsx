import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getLogoPath } from "@/logo";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("maintenance");
    return { title: t("title") };
}

export default async function MaintenancePage() {
    const t = await getTranslations("maintenance");
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
            <img width={100} src={getLogoPath("dach")} alt="logo" />

            <h2 className="text-2xl font-bold">{t("title")}</h2>

            <p>info@dach-trier.com</p>

            <div className="flex gap-5 text-blue-500">
                <a href="https://instagram.com/dach_ukr_de" target="_blank">
                    Instagram
                </a>

                <a href="https://facebook.com/DACH.ukr.de" target="_blank">
                    Facebook
                </a>
            </div>
        </div>
    );
}
