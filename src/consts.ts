// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Blocks Better — Premium MVP Studio";
export const SITE_DESCRIPTION =
  "A premium product engineering studio building MVPs for small startups and non‑technical founders — strategy, design, engineering, and launch.";

export const GITHUB_URL =
  "/contact";

export const SITE_METADATA = {
  title: {
    default: "Blocks Better — Premium MVP Studio",
    template: "%s | Blocks Better",
  },
  description:
    "A premium product engineering studio building MVPs for small startups and non‑technical founders — from idea to shipped product.",
  keywords: [
    "Astro",
    "product engineering studio",
    "mvp development",
    "startup mvp",
    "non-technical founders",
    "startup studio",
    "product design",
    "ui ux design",
    "full stack development",
    "react",
    "astro",
    "tailwind",
  ],
  authors: [{ name: "Blocks Better" }],
  creator: "Blocks Better",
  publisher: "Blocks Better",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Blocks Better — Premium MVP Engineering Studio",
    description:
      "A premium product engineering studio building MVPs for small startups and non‑technical founders — from idea to shipped product.",
    siteName: "Blocks Better",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blocks Better — Premium MVP Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blocks Better — Premium MVP Engineering Studio",
    description:
      "We build MVPs for small startups and non‑technical founders — strategy, design, engineering, and launch.",
    images: ["/og-image.jpg"],
    creator: "@blocksbetter",
  },
};
