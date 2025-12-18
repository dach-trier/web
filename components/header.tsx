import Link from "next/link";
import DachLogo from "@/logos/dach";
import LanguageDropdown from "@/components/language-dropdown";
import DonationButton from "@/components/donation-button/solid";

export function Header() {
    return (
        <div
            className="
                mx-auto py-2
                w-[80%] max-md:w-[95%]
                flex justify-between items-center
            "
        >
            <Link href="/">
                <DachLogo width={60} />
            </Link>

            <div className="flex items-center gap-5">
                <DonationButton size={11} showLabel />
                <LanguageDropdown variant="solid" x="right" width={44} />
            </div>
        </div>
    );
}
