import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Serif_KR } from "next/font/google";

const NotoSerifKorean = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${NotoSerifKorean.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
