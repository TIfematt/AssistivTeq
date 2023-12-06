import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'


export const metadata = {
  title: 'AssistivTeq',
  description: '...Redefining Technologies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  )
}
