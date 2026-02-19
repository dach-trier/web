export type SpacingProps = {
    vertical?: number | string | undefined;
    horizontal?: number | string | undefined;
};

const Spacing = (props: SpacingProps) => {
    return (
        <div
            style={{
                height: props.vertical ?? 0,
                width: props.horizontal ?? 0,
            }}
        />
    );
};

export default Spacing;
