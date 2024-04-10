import Image from "next/image";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      id="container"
      className={`flex min-h-screen flex-col items-center justify-between px-20 ${inter.className}`}
    >
      <div id="app-body" className="w-full">
        <Navbar />
      </div>
    </main>
  );
}
