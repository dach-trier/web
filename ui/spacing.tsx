type Props = {
    width?: number | string;
    height?: number | string;
};

export default function Spacing({ width, height }: Props) {
    return <div style={{ width, height }}></div>;
}
