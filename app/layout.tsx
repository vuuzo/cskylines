import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import './globals.css'
import { Chakra_Petch, Source_Sans_3 } from 'next/font/google'
import localFont from 'next/font/local'

const chakra = Chakra_Petch({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-chakra' })
const source_sans = Source_Sans_3({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-source-sans' })
const cityFont = localFont({
  src: '../assets/fonts/cities-regular.otf',
  variable: '--font-city'
})

export const metadata = {
  title: 'Cities: Skylines II Clone',
  description: 'Cities: Skylines II Clone using latest Next 13 & Tailwind',
  themeColor: '#101B30',
  creator: 'VUUZO',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: 'https://cskylines.vercel.app',
    title: 'Cities: Skylines II Clone',
    description: 'Cities: Skylines II Clone using latest Next 13 & Tailwind',
    siteName: 'Cities: Skylines II Clone',
  },
  twitter: {
    card: "summary_large_image",
    title: 'Cities: Skylines II Clone',
    description: 'Cities: Skylines II Clone using latest Next 13 & Tailwind',
    creator: "@vvuuzo",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${chakra.variable} ${source_sans.variable} ${cityFont.variable}`}>
        <body className='flex flex-col min-h-screen'>
          <Header />
          <main className='mt-[56px] lg:mt-[72px] flex-grow flex flex-col'>
            {children}
          </main>
          <Footer />
        </body>
    </html>
  )
}
