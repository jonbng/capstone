import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Jonathan Bangert - Capstone Portfolio",
  description: "Capstone portfolio showcasing my project on Generative AI use in schools",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

