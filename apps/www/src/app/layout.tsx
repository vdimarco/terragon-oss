import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { UserAtomsHydratorServer } from "@/components/system/user-atoms-server";
import { Cabin, Geist, Geist_Mono } from "next/font/google";
import { ServerProviders } from "@/components/system/server-providers";
import { KonamiVideo } from "@/components/konami-video";

export const metadata: Metadata = {
  title: "Terragon",
  description: "AI-powered coding assistant platform",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Terragon",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Terragon",
    title: "Terragon",
    description: "AI-powered coding assistant platform",
  },
  twitter: {
    card: "summary",
    title: "Terragon",
    description: "AI-powered coding assistant platform",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-content",
};

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5VPXMFRW');`,
          }}
        />
        {/* End Google Tag Manager */}
        {process.env.NODE_ENV === "development" ? (
          <link rel="icon" href="/favicon-dev.png" />
        ) : (
          <link rel="icon" href="/favicon.png" />
        )}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#f8f5f0" />
        <meta
          name="theme-color"
          content="#f8f5f0"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#1a1a1a"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        className={`${cabin.variable} ${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VPXMFRW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ServerProviders>
          <UserAtomsHydratorServer>
            <>{children}</>
            <Toaster
              position="top-center"
              toastOptions={{
                duration: 3000,
              }}
            />
            {/* Persistent across routes */}
            <KonamiVideo startSeconds={155} />
          </UserAtomsHydratorServer>
        </ServerProviders>
      </body>
    </html>
  );
}
