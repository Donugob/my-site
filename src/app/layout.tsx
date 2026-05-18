// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import PageTransitionProvider from "@/components/PageTransitionProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = "https://build-with-ugob.com.ng";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Build with Ugo.B — Bespoke Web Design & Custom Development",
    template: "%s | Build with Ugo.B",
  },
  description:
    "Build with Ugo.B is a premium web design and development studio in Imo State, Nigeria. We build beautiful, lightning-fast, and high-converting websites for ambitious companies.",
  keywords: [
    "Build with Ugo.B",
    "web design agency Imo State",
    "web developer Owerri",
    "premium website designer Nigeria",
    "high-performance web development",
    "SEO optimization",
    "e-commerce developer Nigeria",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Build with Ugo.B",
    title: "Build with Ugo.B — Bespoke Web Design & Custom Development",
    description:
      "Beautiful, custom web design and lightning-fast web development for ambitious brands. Grow your business and stand out today.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Build with Ugo.B — Premium Web Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build with Ugo.B — Premium Web Design & Development",
    description:
      "Bespoke web design, lightning-fast web development, and top-tier SEO for ambitious brands.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@Don_ugob",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          property="og:image"
          content="https://build-with-ugob.com.ng/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Build with Ugo.B" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Build with Ugo.B — Premium Web Design & Development"
        />
        <meta
          name="twitter:description"
          content="Bespoke web design, lightning-fast web development, and top-tier SEO for ambitious brands."
        />
        <meta
          name="twitter:image"
          content="https://build-with-ugob.com.ng/og-image.jpg"
        />
        <meta name="twitter:image:alt" content="Build with Ugo.B Solutions" />
        <meta name="twitter:creator" content="@Don_ugob" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Build with Ugo.B",
              url: "https://build-with-ugob.com.ng",
              telephone: "+234-810-357-9586",
              email: "hello@build-with-ugob.com.ng",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Owerri",
                addressRegion: "IM",
                addressCountry: "NG",
              },
              geo: { latitude: "5.4833", longitude: "6.9833" },
            }),
          }}
        />
      </head>

      <body className="bg-brand-bg text-brand-text antialiased">
        <Header />
        <PageTransitionProvider>
          <main className="min-h-screen">{children}</main>
        </PageTransitionProvider>
        <Footer />

        <Analytics />
        <SpeedInsights />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
