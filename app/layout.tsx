import Container from './components/containers/Container'
import NavBar from './components/nav/NavBar'
import './globals.css'
import { Urbanist } from 'next/font/google'
import Provider from './providers/provider'
import Footer from './components/footer/Footer'
import Cart from './components/nav/Cart'

const urban = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Foodhub',
    template: '%s | Foodhub',
  },
  description: 'Foodhub is a food delivery service. We deliver food to you.',
  category: 'Food',
  creator: "Foodhub's Team",
  themeColor: '#000',
  publisher: 'Foodhub',
  metadataBase: new URL('https://foodhub.vercel.app/'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-white'>
      <body className={`${urban.className} bg-[#102326] text-white`}>
        <Provider>
          <Container>
            <NavBar />
            {/* @ts-expect-error  */}
            <Cart />
            <main
            className='min-h-screen py-10 relative'
            >
              {children}
            </main>
          </Container>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}

