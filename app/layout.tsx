import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'WikiRocket!',
  description: 'Reach the Top of the Universe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-cyan-900 h-full w-full'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
