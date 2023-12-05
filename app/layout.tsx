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
        className={`${noto_serif.className} bg-light flex flex-col text-dark min-h-screen`}
      >
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
