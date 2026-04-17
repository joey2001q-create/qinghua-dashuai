import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "清华大帅AI伴学",
  description: "智能学习助手，开启提分之旅",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-slate-900 text-white">{children}</body>
    </html>
  )
}
