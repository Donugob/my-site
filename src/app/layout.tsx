// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://build-with-ugob.com.ng";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Build With Ugo.B — Web Development Agency in Owerri",
    template: "%s | Build With Ugo.B",
  },
  description:
    "Build With Ugo.B is a premium web development agency based in Owerri, Imo State, creating high performance websites, SEO-optimized brands, and scalable digital experiences.",
  keywords: [
    "Owerri web developer",
    "Nigeria web design agency",
    "SEO services",
    "Build With Ugo.B",
    "web development agency",
    "web development agency Owerri",
    "web development agency Imo State",
    "Best web development agency in Nigeria",
    "Best web development agency in Owerri",
    "Best web development agency in Imo State",
    "website designer in Imo State",
    "full-stack developer Nigeria",
    "fullstack developer Nigeria",
    "fullstack developer Owerri",
    "fullstack developer Imo State",
    "website developer",
    "website developer Owerri",
    "website developer Imo State",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Build With Ugo.B",
    title: "Build With Ugo.B — Web Development Agency in Owerri",
    description:
      "High-performance websites, modern UI/UX, and top-tier SEO. Build With Ugo.B delivers fast, scalable digital experiences.",
    images: [
      {
        url: "${siteUrl}/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Build With Ugo.B — Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build With Ugo.B — Web Development Agency in Owerri",
    description:
      "Premium web development and SEO services in Nigeria. Let's build your digital success.",
    images: ["${siteUrl}/og-image.jpg"],
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
          content="https://www.build-with-ugob.com.ng/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ugo.B Technologies" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Build With Ugo.B — Web Development Agency"
        />
        <meta
          name="twitter:description"
          content="Premium web development and SEO services in Nigeria. Let's build your digital success."
        />
        <meta
          name="twitter:image"
          content="https://www.build-with-ugob.com.ng/og-image.jpg"
        />
        <meta name="twitter:image:alt" content="Ugo.B Solutions" />
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
      </head>

      <body className={`${inter.className} bg-white text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
