import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KoinX - Cryptocurrency Tracker",
  description: "Track Bitcoin and other cryptocurrency prices, market cap, and trading volume",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <header className="border-b">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">KoinX</h1>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="hover:text-blue-600">Crypto Taxes</a>
                <a href="#" className="hover:text-blue-600">Free Tools</a>
                <a href="#" className="hover:text-blue-600">Resource Center</a>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </nav>
        </header>
        <main className="min-h-screen bg-gray-50">{children}</main>
      </body>
    </html>
  )
}

