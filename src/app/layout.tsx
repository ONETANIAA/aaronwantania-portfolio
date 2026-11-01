import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aaron Wantania — Information Systems Student",
  description:
    "Portfolio of Aaron Wantania, an Information Systems student at UMN exploring Big Data, Data Analytics, Machine Learning, and Web Development through academic projects.",
  openGraph: {
    title: "Aaron Wantania — Information Systems Student",
    description:
      "Exploring Big Data, Data Analytics & Machine Learning through academic projects.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f2f2f2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body>
        {children}
        <noscript>
          <style>{`.reveal[data-armed="true"]{opacity:1;transform:none}`}</style>
        </noscript>
      </body>
    </html>
  );
}
