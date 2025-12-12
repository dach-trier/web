type Props = {
    size: number | string;
    strokeWidth?: number;
    color?: string;
};

export default function ChevronDown({
    size,
    strokeWidth = 1.5,
    color = "currentColor",
}: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={strokeWidth}
            stroke={color}
            width={size}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}
