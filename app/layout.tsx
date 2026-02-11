import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Space_Grotesk } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" })

export const metadata: Metadata = {
  title: "Pixaura — Bientôt en ligne",
  description:
    "Landing page de pré-lancement pour Pixaura : marques ambitieuses, nouvelles activations créatives et écosystème premium.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} ${spaceGrotesk.variable} antialiased`}>
        <div className="background-video-wrapper" aria-hidden="true">
          <video
            className="background-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/Banque d_images/Copie de BACKGROUND WEB DESKTOP.mp4" type="video/mp4" />
          </video>
          <div className="background-video-overlay" />
        </div>
        {children}
      </body>
    </html>
  )
}

