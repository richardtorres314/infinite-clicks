import type { Metadata } from "next";
import "./globals.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Infinite Clicks",
  description:
    "Video booths for corporate events, weddings, parties, and more!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="has-navbar-fixed-top">
      <body className="is-flex is-flex-direction-column">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
