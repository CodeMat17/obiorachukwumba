import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1220" },
  ],
  width: "device-width",
  initialScale: 1,
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://obiorachukwumba.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Obiora Chukwumba, PhD | Author · Media Scholar · Journalist · Film Policy Expert",
  description:
    "Obiora Chukwumba, PhD — Author, media scholar, journalist, film policy expert, co-founder of HumAngle Media, and lecturer at Veritas University Abuja. Bridging the newsroom, the classroom, and the policy table.",
  keywords: [
    "Obiora Chukwumba",
    "Obiora Chukwumba author",
    "Obiora Chukwumba books",
    "HumAngle Media",
    "film policy",
    "NFVCB",
    "Nigeria journalist",
    "media scholar",
    "conflict reporting",
    "Veritas University Abuja",
    "Nollywood",
    "Sahel reporting",
  ],
  authors: [{ name: "Obiora Chukwumba, PhD" }],
  creator: "Obiora Chukwumba",
  openGraph: {
    title: "Obiora Chukwumba, PhD",
    description:
      "Author. Media Scholar. Journalist. Film Policy Expert. Co-Founder. Lecturer. Bridging the newsroom, the classroom, and the policy table.",
    type: "profile",
    locale: "en_NG",
    siteName: "Obiora Chukwumba, PhD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obiora Chukwumba, PhD",
    description:
      "Author. Media Scholar. Journalist. Film Policy Expert. Co-Founder. Lecturer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={nunito.variable} suppressHydrationWarning>
      <body className="min-h-screen font-nunito antialiased bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
