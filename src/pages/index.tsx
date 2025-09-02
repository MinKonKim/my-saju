import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Scene1, Scene2, Scene3 } from "@/components/scenes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-[#F3F2EF] max-w-md mx-auto">
      <Scene1 />
      <Scene2 />
      <Scene3 />
    </main>
  );
}
