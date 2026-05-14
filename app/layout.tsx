import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://symplicare.ai"),
  title: "SympliCare AI | Care Home Operations Platform",
  description: "Simplify care home operations with SympliCare AI. Structured workflows, practical documentation management, and operational visibility designed for care teams.",
  keywords: ["care home management", "operations platform", "care home software", "documentation system"],
  authors: [{ name: "SympliCare" }],
  creator: "SympliCare",
  publisher: "SympliCare",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo2.jpeg",
    shortcut: "/logo2.jpeg",
    apple: "/logo2.jpeg",
  },
  openGraph: {
    title: "SympliCare AI — Care Home Operations Platform",
    description: "Simplify care home operations with SympliCare AI. Structured workflows, practical documentation management, and operational visibility designed for care teams.",
    url: "https://symplicare.ai",
    siteName: "SympliCare AI",
    images: [
      {
        url: "/logo2.jpeg",
        width: 1200,
        height: 630,
        alt: "SympliCare AI - Care Home Operations Platform",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SympliCare AI — Care Home Operations Platform",
    description: "Simplify care home operations with SympliCare AI. Structured workflows, practical documentation management, and operational visibility designed for care teams.",
    images: ["/logo2.jpeg"],
    creator: "@SympliCareAI",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://symplicare.ai",
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
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Anti-flash: apply dark class before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <ThemeProvider>
          <Header />
          <MobileNav />
          <main id="main-content" className="flex-1 pt-20 md:pt-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
