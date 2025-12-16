import { ReactNode } from "react";

type Props = {
    children?: ReactNode;
};

export default function DropdownItem({ children }: Props) {
    return (
        <div className="flex py-1 px-3 text-nowrap cursor-pointer rounded-lg hover:bg-gray-200 active:bg-gray-300 transition-colors">
            Item #1
        </div>
    );
}
