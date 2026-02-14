import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "90SUPERSTORE – Quality Products at Best Prices",
  description:
    "Shop global items from China, USA, and local Nigerian products. Premium e-commerce store with fast delivery and money-back guarantee.",
  generator: "v0.app",
  metadataBase: new URL("https://90superstore.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://90superstore.vercel.app",
    siteName: "90SUPERSTORE",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#007BFF" },
    { media: "(prefers-color-scheme: dark)", color: "#007BFF" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
