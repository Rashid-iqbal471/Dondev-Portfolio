import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DonDev - Gateway to Automation | Business Process Automation Agency",
  description:
    "Transform your business with intelligent automation solutions. DonDev specializes in workflow optimization, lead generation systems, and business process automation using Make, Zapier, and n8n.",
  keywords:
    "automation, business process automation, workflow optimization, lead generation, Make, Zapier, n8n, social media automation",
  authors: [{ name: "DonDev Team" }],
  openGraph: {
    title: "DonDev - Gateway to Automation",
    description: "Transform your business with intelligent automation solutions and workflow optimization",
    url: "https://dondev.com",
    siteName: "DonDev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DonDev - Gateway to Automation",
    description: "Transform your business with intelligent automation solutions and workflow optimization",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
