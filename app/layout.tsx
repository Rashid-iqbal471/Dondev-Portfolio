import { type ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import 'leaflet/dist/leaflet.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DonDev - Gateway to Automation | Business Process Automation Agency",
  description:
    "Transform your business with intelligent automation solutions. DonDev specializes in workflow optimization, lead generation systems, and business process automation using Make, Zapier, and n8n.",
  keywords:
    "automation, business process automation, workflow optimization, lead generation, Make, Zapier, n8n, social media automation",
  authors: [{ name: "DonDev Team" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.jpg", sizes: "32x32", type: "image/jpeg" },
    ],
  },
  openGraph: {
    title: "DonDev - Gateway to Automation",
    description: "Transform your business with intelligent automation solutions and workflow optimization",
    url: "https://dondev.com",
    siteName: "DonDev",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DonDev - Gateway to Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DonDev - Gateway to Automation",
    description: "Transform your business with intelligent automation solutions and workflow optimization",
    images: ["/og-image.png"],
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
