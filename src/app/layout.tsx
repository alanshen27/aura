import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "IDKAASynBio — Learn Synthetic Biology",
    template: "%s | IDKAASynBio",
  },
  description:
    "Learn synthetic biology in small, clear modules. Simple explanations for curious minds of all ages and backgrounds.",
  openGraph: {
    title: "IDKAASynBio — Learn Synthetic Biology",
    description:
      "Learn synthetic biology in small, clear modules. Simple explanations for curious minds of all ages and backgrounds.",
    siteName: "IDKAASynBio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dots">
        <Header />
        <ScrollProgress />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
