type IconProps = {
    fill: string;
    size: number;
    className?: string;
};

export const Chevron: React.FC<IconProps> = ({ fill, size, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={fill}
            className={`inline transition-all duration-300 ${
                className as string
            }`}
            viewBox="0 0 16 16"
        >
            <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
        </svg>
    );
};
