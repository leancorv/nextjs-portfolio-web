import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from './partials/Footer'
import Header from '@/components/Header/Header'
import { Provider } from './Provider';

const interVariable = Inter({ subsets: ['latin'] });

export const metadata = {
  openGraph: {
    title: "Leandro Corvalan - Portfolio",
    siteName: "leancorv.pro",
    url: "https://www.leancorv.pro/",
    type: "website",
    description:
      "Software developer. WEB, Backend and Mobile developer. Apps, clean arquitecture, and more...",
    images: [
      {
        url: "https://res.cloudinary.com/dia0mugvi/image/upload/fl_preserve_transparency/v1741989233/ThumbnailSEO1.jpg",
        width: 1200,
        height: 630,
      },
      {
        url: "https://res.cloudinary.com/dia0mugvi/image/upload/fl_preserve_transparency/v1741989466/ThumbnailSEO2.jpg",
        width: 600,
        height: 200,
        alt: "og image",
      },
    ],
  },
  title: "Leandro Corvalan",
  generator: "Next.js",
  icons: [{ rel: "icon", url: "./favicon.ico" }],
  applicationName: "leandro corvalan porfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Flutter",
    "Kotlin",
    "Dart",
    "Android",
    "IOS",
    "Software development",
    "Desarrollo mobile",
    "Leandro Corvalan",
    "leandro corvalan",
    "leandro corvalan portfolio",
    "leancorv porfiolio",
    "lean portfolio",
    "leancorv.pro",
    "desarrollador",
    "desarrollador mobile",
    "Leandro Corvalan Linkedin",
    "leancorv github",
  ],
  authors: [{ name: "Leancorv", url: "https://leancorv.pro" }],
  colorScheme: "dark",
  creator: "Leandro Corvalan",
  publisher: "leancorv",
  alternates: {},
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 dark:bg-gray-900 transition ease">
        <Provider>
          <Header />
          <main className={
                interVariable.className +
               " min-w-xs max-w-screen-lg flex flex-col justify-center items-center mx-auto"
             }>
           {children}
          </main>
          <Footer/>
        </Provider>
      </body>
    </html>
  )
}
