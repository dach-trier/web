type Props = {
    width?: string | number;
    height?: string | number;
};

export default function Germany({ width, height }: Props) {
    return (
        <img
            src="/germany.svg"
            alt="flag of germany"
            style={{ width, height }}
        />
    );
}
