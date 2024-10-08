import type { Metadata, Viewport } from 'next'
import { Open_Sans } from 'next/font/google'
import Footer from './_components/footer'
import ProfilePortrait from './_components/profile-portrait'
import './globals.css'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal', 'italic'],
  preload: true,
  fallback: ['sans-serif']
})

export const metadata: Metadata = {
  title: {
    template: '%s // www.christophstockinger.de',
    default: 'Christoph Stockinger'
  },
  creator: 'Christoph Stockinger <christoph@morethings.digital>',
  formatDetection: {
    telephone: true,
    email: true,
    address: false
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#00ae2f'
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#00ae2f'
    }
  ]
}

export interface IRootLayoutProps
  extends Readonly<{
    children: React.ReactNode
  }> {}

const RootLayout = ({ children }: IRootLayoutProps) => {
  return (
    <html lang="de">
      <body className={openSans.className}>
        <main className="container w-full flex flex-col lg:flex-row lg:gap-8 h-auto lg:min-h-screen">
          <div className="w-full order-2 h-auto lg:w-2/3 lg:pr-24 lg:order-1">
            {children}
          </div>
          <div className="w-full order-1 h-auto aspect-square overflow-hidden lg:w-1/3 lg:order-2 lg:sticky lg:top-0 lg:max-h-screen">
            <ProfilePortrait className="lg:absolute lg:inset-0" />
          </div>
        </main>
        <Footer />
        {process.env.VERCEL_ENV === 'production' && (
          <Script
            defer
            data-domain="christophstockinger.de"
            src="https://plausible.io/js/script.js"
          />
        )}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout
