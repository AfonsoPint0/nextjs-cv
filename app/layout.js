import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Afonso Pinto",
  description: "Web portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " p-1 md:p-3 mx-auto max-w-5xl antialiased transition-colors dark:bg-zinc-800 dark:text-white"}>
          <Navbar />
          {children}
      </body>
    </html>
  );
}
