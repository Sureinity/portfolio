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
  title: "Aspiring DevOps / Platform Engineer",
  description:
    "A resume-style developer portfolio focused on Linux, networking, infrastructure as code, automation, and reliable deployment workflows.",
  keywords: [
    "DevOps portfolio",
    "Platform engineer portfolio",
    "Linux",
    "Networking",
    "Infrastructure as code",
    "Automation",
    "CI/CD",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Aspiring DevOps / Platform Engineer",
    description:
      "A structured personal portfolio for showcasing infrastructure projects, learning progress, and platform engineering goals.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspiring DevOps / Platform Engineer",
    description:
      "A panel-based developer resume template built with Next.js, TypeScript, and Tailwind CSS.",
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
