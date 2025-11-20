import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./globals.scss";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata SEO
export const metadata: Metadata = {
  title: {
    default: "Sther Adarraga | Repostería Hojaldrada",
    template: "%s | Repostería Hojaldrada",
  },
  description: "Obrador de repostería hojaldrada artesanal en Donostia-San Sebastián.",
  keywords: ["Sther", "Adarraga", "Repostería", "Hojaldrada", "Hojaldre", "Obrador" , "Donostia", "San Sebastián"],
  metadataBase: new URL("https://stheradarraga.com"),
  // OpenGraph (OG) es un estándar creado por Facebook para que las webs puedan controlar cómo se ven cuando se comparten en redes sociales.
  openGraph: {
    title: "Sther Adarraga",
    description: "Repostería hojaldrada artesanal en Donostia-San Sebastián.",
    url: "https://stheradarraga.com",
    siteName: "Sther Adarraga",
    // Imagen por definir
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenGraph Image",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi App Profesional",
    description: "Aplicación Next.js optimizada.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      dir="ltr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased min-h-screen bg-background text-foreground">
          <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
