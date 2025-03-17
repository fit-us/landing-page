import type { AppProps } from "next/app";
import "@/styles/globals.css";

import { FONT_SUIT } from "@/styles/font";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${FONT_SUIT.variable}`}>
            <Component {...pageProps} />
        </main>
    );
}
