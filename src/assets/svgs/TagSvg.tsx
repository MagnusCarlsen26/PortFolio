export function TagSvg({
    width = "24px",
    height = "24px",
    stroke = "#000000",
    fill = "none"
}: {
    width?: string;
    height?: string;
    stroke?: string;
    fill?: string;
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <path
                    stroke={stroke}
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 10.586V5a1 1 0 011-1h5.586a1 1 0 01.707.293l8.5 8.5a1 1 0 010 1.414l-5.586 5.586a1 1 0 01-1.414 0l-8.5-8.5A1 1 0 014 10.586z"
                />
                <circle
                    cx="8.5"
                    cy="8.5"
                    r="1.5"
                    fill={stroke}
                />
            </g>
        </svg>
    );
}

export default TagSvg;