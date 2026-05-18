// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = "https://build-with-ugob.com.ng";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "UGO.B // PRECISION DIGITAL ENGINEERING",
    template: "%s | UGO.B",
  },
  description:
    "Ugo.B is a precision digital engineering agency based in Owerri, specializing in high-performance ecosystems and immersive UI/UX.",
  keywords: [
    "Owerri web developer",
    "Precision Digital Engineering",
    "Immersive UI/UX",
    "Ugo.B",
    "Next.js 16 Expert",
    "Full-stack Systems",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ugo.B Technologies",
    title: "UGO.B // PRECISION DIGITAL ENGINEERING",
    description:
      "High-performance ecosystems, immersive UI/UX, and top-tier technical SEO. Engineering the future of digital assets.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "UGO.B — PRECISION DIGITAL ENGINEERING",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UGO.B // PRECISION DIGITAL ENGINEERING",
    description:
      "Premium engineering and architectural design for the modern web.",
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
        <meta property="og:image:alt" content="UGO.B PRECISION" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="UGO.B — PRECISION DIGITAL ENGINEERING"
        />
        <meta
          name="twitter:description"
          content="Premium engineering and architectural design for the modern web."
        />
        <meta
          name="twitter:image"
          content="https://build-with-ugob.com.ng/og-image.jpg"
        />
        <meta name="twitter:image:alt" content="UGO.B SOLUTIONS" />
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
              name: "Ugo.B",
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
        <main className="min-h-screen">{children}</main>
        <Footer />

        <Analytics />
        <SpeedInsights />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
