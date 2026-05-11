import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import {
  IBM_Plex_Mono,
  Instrument_Serif,
  Newsreader,
  Public_Sans,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const terminus = localFont({
  src: [
    {
      path: "./fonts/TerminusTTF-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TerminusTTF-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-terminus",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.ghlensui.xyz"),
  applicationName: "John Ghlen Dealdo Portfolio",
  title: "John Ghlen Dealdo | DevOps Portfolio",
  description:
    "The DevOps portfolio of John Ghlen Dealdo, a DevOps / Platform Engineer and part-time Linux system administrator based in the Philippines.",
  keywords: [
    "John Ghlen Dealdo",
    "DevOps portfolio",
    "Platform engineer portfolio",
    "Linux",
    "Networking",
    "Infrastructure as code",
    "Automation",
    "CI/CD",
  ],
  authors: [{ name: "John Ghlen Dealdo" }],
  openGraph: {
    siteName: "John Ghlen Dealdo Portfolio",
    title: "John Ghlen Dealdo | DevOps Portfolio",
    description:
      "The portfolio of John Ghlen Dealdo focused on Linux systems, infrastructure, automation, and platform engineering growth.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Ghlen Dealdo | DevOps Portfolio",
    description:
      "The portfolio of John Ghlen Dealdo focused on Linux systems, infrastructure, automation, and platform engineering growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef3fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${publicSans.variable} ${ibmPlexMono.variable} ${instrumentSerif.variable} ${newsreader.variable} ${terminus.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
