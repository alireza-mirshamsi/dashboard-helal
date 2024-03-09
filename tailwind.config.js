/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                "normal": "0px 1px 10px 0px #0000000D",
            },
            borderRadius: {
                "4xl": "2rem"
            },
            fontFamily: {
                "Dana": "Dana",
                "DanaMedium": "Dana Medium",
                "DanaDemiBold": "Dana DemiBold",
            },
            letterSpacing: {
                "tightest": "-0.065em"
            },
            spacing: {
                "4.5": "1.125rem",
                "25": "6.25rem",
                "30": "7.5rem",
                "50": "12.5rem",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    lg: "0.625rem"
                }
            },
        },
    },
    plugins: [
        function({ addVariant }) {
            addVariant('child', '& > * ');
            addVariant('child-hover', '& > *:hover');
        }
    ],
}