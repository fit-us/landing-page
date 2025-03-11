import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { NavTop } from "@/components/NavTop";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className="w-full max-w-[1200px] mx-auto">
            <NavTop />
            <Component {...pageProps} />
        </main>
    );
}
