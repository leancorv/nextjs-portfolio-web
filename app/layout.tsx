import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from './partials/Footer'
import Header from '@/components/Header/Header'
import { Provider } from './Provider';

const interVariable = Inter({ subsets: ['latin'] });

export const metadata = {
  openGraph: {
    title: "Leandro Corvalan | Data Science & Software Dev",
    siteName: "leancorv.cloud",
    url: "https://www.leancorv.cloud/",
    type: "website",
    description:
      "DevOps Trainee. Cloud Enthusiast. AWS, Docker, Kubernetes, Terraform, CI/CD.",
    images: [
      {
        url: "https://res.cloudinary.com/dia0mugvi/image/upload/fl_preserve_transparency/v1776227072/ThumbnailSEO-1_borx7p.jpg",
        width: 1200,
        height: 630,
      },
      {
        url: "https://res.cloudinary.com/dia0mugvi/image/upload/fl_preserve_transparency/v1776227168/ThumbnailSEO-2_dna30q.jpgg",
        width: 600,
        height: 200,
        alt: "og image",
      },
    ],
  },
  title: "Leandro Corvalan | Data Science & Software Dev",
  generator: "Next.js",
  icons: [{ rel: "icon", url: "./favicon.ico" }],
  applicationName: "Leandro Corvalan Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    // Marca Personal
    "Leandro Corvalan",
    "leancorv",
    "leancorv.cloud",
    "leandro corvalan portfolio",
    
    // Educación y Perfil
    "Ciencia de Datos UBA",
    "Data Science",
    "Software Developer",
    "Estudiante UBA",
    "MLOps Enthusiast",
    
    // Stack Técnico (Data & Dev)
    "Python",
    "SQL",
    "Pandas",
    "Next.js",
    "FastAPI", // Útil por si sumás el proyecto del árbitro
    "Streamlit", // Clave por tu proyecto de Messi
    
    // Infraestructura (Tu diferencial)
    "Cloud Computing",
    "GCP",
    "AWS",
    "Docker",
    "Terraform",
    "CI/CD"
  ],
  authors: [{ name: "Leancorv", url: "https://leancorv.cloud" }],
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
