import type { Metadata } from "next";
import "./globals.scss";
import { noto_serif } from "@/app/lib/fonts";
import Header from "@/app/ui/header/Header";
import Footer from "@/app/ui/footer/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${noto_serif.className} flex h-screen flex-col overflow-hidden bg-light text-dark`}
      >
        <div className="noise -z-30 h-screen w-full rounded-2xl border-4 border-white sm:rounded-[2rem] sm:border-8">
          <div className="bg-noise absolute -z-20 h-screen w-screen" />
          <div className="top-circle absolute -left-16 -top-16 aspect-square rounded-br-full blur-[100px]" />
          <div className="bottom-circle absolute -bottom-16 -right-16 aspect-square rounded-tl-full blur-[100px]" />
        </div>
        <Header />
        <div className="mx-2 mb-2 flex flex-grow flex-col overflow-hidden sm:mx-6 sm:mb-6">
          {children}
        </div>
      </body>
    </html>
  );
}
