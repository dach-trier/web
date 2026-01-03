import type { SVGProps } from "react";

const UkrainianFlag = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={800}
        height={800}
        aria-hidden="true"
        className="ukraine_svg__iconify ukraine_svg__iconify--twemoji"
        viewBox="0 0 36 36"
        {...props}
    >
        <path fill="#005BBB" d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4" />
        <path fill="#FFD500" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-9h36z" />
    </svg>
);

export default UkrainianFlag;
