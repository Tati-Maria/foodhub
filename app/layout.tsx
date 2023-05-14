import './globals.css'
import { Urbanist } from 'next/font/google'

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
    <html lang="en">
      <body className={urban.className}>{children}</body>
    </html>
  )
}
