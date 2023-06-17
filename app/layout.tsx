import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from './partials/Footer'
import Header from '@/components/Header/Header'
import { Provider } from './Provider';
import { CirclesColorBg } from '@/components/CirclesColorBg';

const interVariable = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        <CirclesColorBg />
        </Provider>
      </body>
    </html>
  )
}
