import React from "react"
import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { ChatButton } from "@/components/chatbot/chat-button"

import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "TimeTravel Agency | Le temps est votre destination",
  description:
    "Luxury time travel experiences to the most exclusive eras in history. Paris 1889, the Cretaceous, Florence 1504 and beyond.",
}

export const viewport: Viewport = {
  themeColor: "#09090b",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        <ChatButton />
      </body>
    </html>
  )
}
