import localFont from "next/font/local";

export const FONT_SUIT = localFont({
    src: [
        { path: "./fonts/SUIT-Thin.woff2", weight: "100" },
        { path: "./fonts/SUIT-ExtraLight.woff2", weight: "200" },
        { path: "./fonts/SUIT-Light.woff2", weight: "300" },
        { path: "./fonts/SUIT-Regular.woff2", weight: "400" },
        { path: "./fonts/SUIT-Medium.woff2", weight: "500" },
        { path: "./fonts/SUIT-SemiBold.woff2", weight: "600" },
        { path: "./fonts/SUIT-Bold.woff2", weight: "700" },
        { path: "./fonts/SUIT-ExtraBold.woff2", weight: "800" },
        { path: "./fonts/SUIT-Heavy.woff2", weight: "900" },
    ],
    display: "swap",
    variable: "--font-suit",
});
